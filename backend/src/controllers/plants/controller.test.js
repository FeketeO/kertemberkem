const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("Plant controller", () => {
    const mockData = [{
        "id": "1",
        "name": "Kárpáti Harangvirág",
        "latinName": "Campanula carpatica",
        "colour": "blue, lilac, white",
        "waterDemand": "modest",
        "lightDemand": "penumbra",
        "soilDemand": "modest",
        "blooming": "July, August, September",
        "lifeCycles": "perennial",
        "type": "low herbaceous",
        "toxic": "false",
        "evergreen": "no",
        "url": "http://www.botanikaland.hu/campanula-carpatica/karpati-harangvirag/"
      },
      {
        "id": "2",
        "name": "Velencei Kutyatej",
        "latinName": "Euphorbia characias subsp. wulfenii",
        "colour": "yellowish green",
        "waterDemand": "modest",
        "lightDemand": "sun-lover",
        "soilDemand": "modest",
        "blooming": "April, May",
        "lifeCycles": "perennial",
        "type": "high herbaceous",
        "toxic": "true",
        "evergreen": "evergreen",
        "url": "http://www.botanikaland.hu/euphorbia-characias-subsp.-wulfenii/velencei-kutyatej/"
      },
      {
        "id": "3",
        "name": "Pompás Varjúháj",
        "latinName": "Sedum spectabile",
        "colour": "rose",
        "waterDemand": "modest",
        "lightDemand": "sun-lover",
        "soilDemand": "modest",
        "blooming": "August, September, October",
        "lifeCycles": "perennial",
        "type": "medium-high herbaceous",
        "toxic": "false",
        "evergreen": "no",
        "url": "http://www.botanikaland.hu/sedum-spectabile/pompas-varjuhaj/"
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const PLANTid = 37;

        const request = mockRequest({
            params: {
                id: PLANT_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(PLANT_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === PLANT_ID)
                );                
            })
    });
});