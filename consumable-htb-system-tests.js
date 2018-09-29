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
        urlRegex: /^https?:\/\/e.serverbid.com\/api\//
    };
}

function getCallbackType() {
    return 'NONE';
}

function getArchitecture() {
    return 'SRA';
}

module.exports = {
    getPartnerId: getPartnerId,
    getStatsId: getStatsId,
    getBidRequestRegex: getBidRequestRegex,
    getCallbackType: getCallbackType,
    getArchitecture: getArchitecture
};
