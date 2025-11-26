/**
 * Cloudflare Worker: Google Ads Reports API
 *
 * Busca dados processados do Supabase
 * Endpoint: /api/google-ads/reports
 */

export const onRequest = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Autenticação (opcional)
    const authHeader = context.request.headers.get('Authorization');
    const expectedAuth = context.env.DASHBOARD_PASSWORD;

    if (expectedAuth && authHeader !== `Bearer ${expectedAuth}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { searchParams } = new URL(context.request.url);
    const reportType = searchParams.get('type') || 'summary'; // summary, campaigns, keywords, ads

    let data;

    switch (reportType) {
      case 'summary':
        data = await fetchPerformanceSummary(context.env);
        break;
      case 'campaigns':
        data = await fetchCampaigns(context.env);
        break;
      case 'keywords':
        data = await fetchTopKeywords(context.env);
        break;
      case 'ads':
        data = await fetchTopAds(context.env);
        break;
      case 'upload-history':
        data = await fetchUploadHistory(context.env);
        break;
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid report type' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
    }

    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // Cache 5 minutos
      },
    });
  } catch (error) {
    console.error('Reports API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch reports',
        message: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

/**
 * Busca resumo de performance
 */
async function fetchPerformanceSummary(env) {
  const response = await fetch(
    `${env.SUPABASE_URL}/rest/v1/google_ads_performance_summary?order=date_start.desc&limit=30`,
    {
      headers: {
        'apikey': env.SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${env.SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase error: ${await response.text()}`);
  }

  const data = await response.json();

  // Calcular métricas agregadas
  const totals = data.reduce(
    (acc, row) => ({
      total_clicks: acc.total_clicks + (row.total_clicks || 0),
      total_impressions: acc.total_impressions + (row.total_impressions || 0),
      total_cost: acc.total_cost + (row.total_cost || 0),
      total_conversions: acc.total_conversions + (row.total_conversions || 0),
    }),
    { total_clicks: 0, total_impressions: 0, total_cost: 0, total_conversions: 0 }
  );

  return {
    summary: {
      clicks: totals.total_clicks,
      impressions: totals.total_impressions,
      ctr: totals.total_impressions > 0
        ? ((totals.total_clicks / totals.total_impressions) * 100).toFixed(2)
        : 0,
      cost: totals.total_cost.toFixed(2),
      conversions: totals.total_conversions,
      cost_per_conversion:
        totals.total_conversions > 0
          ? (totals.total_cost / totals.total_conversions).toFixed(2)
          : 0,
      conversion_rate:
        totals.total_clicks > 0
          ? ((totals.total_conversions / totals.total_clicks) * 100).toFixed(2)
          : 0,
    },
    daily_data: data,
  };
}

/**
 * Busca campanhas
 */
async function fetchCampaigns(env) {
  const response = await fetch(
    `${env.SUPABASE_URL}/rest/v1/google_ads_campaigns?order=uploaded_at.desc&limit=50`,
    {
      headers: {
        'apikey': env.SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${env.SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase error: ${await response.text()}`);
  }

  return response.json();
}

/**
 * Busca top keywords
 */
async function fetchTopKeywords(env) {
  const response = await fetch(
    `${env.SUPABASE_URL}/rest/v1/google_ads_top_keywords?limit=20`,
    {
      headers: {
        'apikey': env.SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${env.SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase error: ${await response.text()}`);
  }

  return response.json();
}

/**
 * Busca top ads
 */
async function fetchTopAds(env) {
  const response = await fetch(
    `${env.SUPABASE_URL}/rest/v1/google_ads_top_ads?limit=10`,
    {
      headers: {
        'apikey': env.SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${env.SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase error: ${await response.text()}`);
  }

  return response.json();
}

/**
 * Busca histórico de uploads
 */
async function fetchUploadHistory(env) {
  const response = await fetch(
    `${env.SUPABASE_URL}/rest/v1/google_ads_upload_history?order=uploaded_at.desc&limit=20`,
    {
      headers: {
        'apikey': env.SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${env.SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase error: ${await response.text()}`);
  }

  return response.json();
}
