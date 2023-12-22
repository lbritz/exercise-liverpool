sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'SampleLiverpool/MyApplication/test/integration/FirstJourney',
		'SampleLiverpool/MyApplication/test/integration/pages/RisksList',
		'SampleLiverpool/MyApplication/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('SampleLiverpool/MyApplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);