const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("Hortus controller", () => {
    const mockData = [{
        "id": "1",
        "name": "Sun lovers",
        "plantList": [
          "A: Velencei Kutyatej ",
          "B: Pompás Varjúháj ",
          "C: Keleti Mák ",
          "D: Kerti Harangláb ",
          "E: Óriás Díszhagyma ",
          "F: Nagyvirágú Macskamenta ",
          "G: Piros Gyűszűvirág ",
          "H: Sárgaviola "
        ],
        "note": "",
        "url": "http://gazigazito.hu/tarhely/probalkozas/kepek/1_1.jpg"
      },
      {
        "id": "2",
        "name": "Nice summertime",
        "plantList": [
          "A: Törpe Lobélia ",
          "B: Kerti Sarkantyúka ",
          "C: Lángszínű Sásliliom ",
          "D: Sásliliom "
        ],
        "note": "",
        "url": "http://gazigazito.hu/tarhely/probalkozas/kepek/15.jpg"
      },
      {
        "id": "3",
        "name": "Low border",
        "plantList": [
          "A: Kerti Sarkantyúka ",
          "B: Cseppecskevirág ",
          "C: Pompás Gólyaorr "
        ],
        "note": "",
        "url": "http://gazigazito.hu/tarhely/probalkozas/kepek/14.jpg"
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const HORTUS_ID = 37;

        const request = mockRequest({
            params: {
                id: HORTUS_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(HORTUS_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === HORTUS_ID)
                );                
            })
    });
});