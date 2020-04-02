window.com_nrg_visualization_chart_GoogleAnalyticsChartComponent = function () {

    var state = this.getState();

    this.renderChart = function () {

        gapi.analytics.ready(function () {

            gapi.analytics.auth.authorize({
                'serverAuth': {
                    'access_token': state.accessToken
                }
            });

            var dataChart = new gapi.analytics.googleCharts.DataChart();

            dataChart.set({
                query: {
                    'ids': state.viewId,
                    'metrics': state.metrics,
                    'dimensions': state.dimensions,
                    'start-date': state.startDate,
                    'end-date': state.endDate
                },
                chart: {
                    'type': state.chartType,
                    'container': 'google-analytics-visualization-chart-container',
                    'options': {
                        'width': '100%',
                        'height': '100%',
                        'title': state.title
                    }
                }
            });

            if (state.pageUrl) {
                var filter = {'query': {'filters': 'ga:pagePath==' + state.pageUrl}};
                dataChart.set(filter);
            }

            dataChart.execute();
        });
    };

};

