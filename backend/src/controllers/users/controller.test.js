const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("User controller", () => {
    const mockData = [{
        "id": 35,
        "firstName": "Jennie",
        "lastName": "Soldi",
        "email": "jsoldiy@washingtonpost.com",
        "password": "6qIDIPV3L",
        "role": 1
      },
      {
        "id": 36,
        "firstName": "Shirlee",
        "lastName": "Binns",
        "email": "sbinnsz@cmu.edu",
        "password": "VpUTgW",
        "role": 1
      },
      {
        "id": 37,
        "firstName": "Donovan",
        "lastName": "Jados",
        "email": "djados10@t-online.de",
        "password": "EGNRBfC",
        "role": 2
      },];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 37;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === USER_ID)
                );                
            })
    });
});