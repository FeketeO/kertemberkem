const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("Shop controller", () => {
    const mockData = [{
        "id": "1",
        "name": "Oázis Kertészet - Budapest, Pasarét",
        "city": "Budapest",
        "address": "Zilah u. 6, 1022",
        "url": "https://oazis.hu/",
        "note": ""
      },
      {
        "id": "2",
        "name": "Safru",
        "city": "Budapest",
        "address": " Budaörsi út, 1112",
        "url": "http://safru.hu/",
        "note": ""
      },
      {
        "id": "3",
        "name": "Kelenvölgyi Díszfaiskola",
        "city": "Budapest",
        "address": "Balatoni út 143, 1112",
        "url": "http://kelenvolgyidiszfaiskola.lapunk.hu/",
        "note": ""
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const SHOP_ID = 37;

        const request = mockRequest({
            params: {
                id: SHOP_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(SHOP_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === SHOP_ID)
                );                
            })
    });
});