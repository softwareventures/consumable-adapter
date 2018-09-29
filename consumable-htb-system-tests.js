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
    expect(Object.keys(request.query).length).toBe(0);
}

module.exports = {
    getPartnerId: getPartnerId,
    getStatsId: getStatsId,
    getBidRequestRegex: getBidRequestRegex,
    getCallbackType: getCallbackType,
    getArchitecture: getArchitecture,
    getConfig: getConfig,
    validateBidRequest: validateBidRequest
};
