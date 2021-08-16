const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("User controller", () => {
    const mockData = [{
        "id": "1",
        "user": "Sanderson Cavanagh",
        "garden": [
          "Törpe Lobélia",
          "Sárgaviola",
          "Piros Gyűszűvirág",
          "Nagyvirágú Macskamenta"
        ],
        "note": ""
      },
      {
        "id": "2",
        "user": "Teirtza Aymeric",
        "garden": [
          "Illatos Ibolya",
          "Lángszínű Sásliliom",
          "Bársonyvirág",
          "Pompás Rézvirág"
        ],
        "note": ""
      },
      {
        "id": "3",
        "user": "Carlee Whistance",
        "garden": [
          "Sárgaviola",
          "Kerti Nebáncsvirág",
          "Bársonyvirág",
          "Pompás Rézvirág"
        ],
        "note": ""
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const GARDEN_ID = 1;

        const request = mockRequest({
            params: {
                id: GARDEN_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(GARDEN_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === GARDEN_ID)
                );                
            })
    });
});