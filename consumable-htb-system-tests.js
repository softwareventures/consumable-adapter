'use strict';

function getPartnerId() {
    return 'ConsumableHtb';
}

function getStatsId() {
    return 'CNSM';
}

function getBidRequestRegex() {
    return {
        method: 'POST',
        urlRegex: /^https?:\/\/e\.serverbid\.com\/api\//
    };
}

function getCallbackType() {
    return 'NONE';
}

function getArchitecture() {
    return 'SRA';
}

function getConfig() {
    return {
        xSlots: {
            1: {
                networkId: '9969',
                groupId: '8307.5',
                siteId: '1029010',
                zoneIds: [187327],
                unitId: '4508',
                unitName: 'cnsmbl-audio-320x50-slider',
                adTypes: [23]
            },
            2: {
                networkId: '9969',
                groupId: '8307.5',
                siteId: '1029010',
                zoneIds: [187327],
                unitId: '4508',
                unitName: 'cnsmbl-audio-320x50-slider',
                adTypes: [23]
            }
        }
    };
}

function validateBidRequest(request) {
    expect(request.host).toBe('e.serverbid.com');
    expect(request.pathname).toBe('/api/v2');
    expect(request.query).toEqual({});
}

function getValidResponse(request, creative) {
    return JSON.stringify({
        user: {
            key: 'ad39231daeb043f2a9610414f08394b5'
        },
        decisions: {
            1: {
                adId: 1234,
                creativeId: 2345,
                flightId: 3456,
                campaignId: 4567,
                clickUrl: 'http://example.org/click',
                impressionUrl: 'http://example.org/impression',
                contents: [
                    {
                        type: 'html',
                        body: creative
                    }
                ],
                height: 250,
                width: 300,
                events: [],
                pricing: {
                    price: 0,
                    clearPrice: 0.3238704,
                    revenue: 0.0003238704,
                    rateType: 2,
                    eCPM: 0
                }
            },
            2: null
        }
    });
}

function validateTargeting(targetingMap) {
    expect(targetingMap).toEqual(jasmine.objectContaining({
        ix_cnsm_id: jasmine.arrayWithExactContents([jasmine.any(String)]),
        ix_cnsm_cpm: jasmine.arrayWithExactContents(['300x250_35'])
    }));
}

function getPassResponse() {
    return JSON.stringify({
        user: {
            key: 'ad39231daeb043f2a9610414f08394b5'
        },
        decisions: {
            1: null,
            2: null
        }
    });
}

function getPixelRequestRegex() {
    return {
        pixel: {
            method: 'GET',
            urlRegex: /^http:\/\/example\.org\/impression$/
        }
    };
}

function validatePixelRequests(requests) {
    expect(requests.length).toBe(1);
    expect(requests[0].host).toBe('example.org');
    expect(requests[0].pathname).toBe('/impression');
    expect(requests[0].query).toEqual(jasmine.arrayWithExactContents([]));
}

module.exports = {
    getPartnerId: getPartnerId,
    getStatsId: getStatsId,
    getBidRequestRegex: getBidRequestRegex,
    getCallbackType: getCallbackType,
    getArchitecture: getArchitecture,
    getConfig: getConfig,
    validateBidRequest: validateBidRequest,
    getValidResponse: getValidResponse,
    validateTargeting: validateTargeting,
    getPassResponse: getPassResponse,
    getPixelRequestRegex: getPixelRequestRegex,
    validatePixelRequests: validatePixelRequests
};
