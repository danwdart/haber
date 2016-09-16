const mockData = [
    {
        "id": 0,
        "name": "Bob Dobbs",
        "location": "Bob's House"
    },
    {
        "id": 1,
        "name": "Connie Dobbs",
        "location": "Dobbstown"
    },
    {
        "id": 2,
        "name": "Rex Evilman Dobbs",
        "location": "Faketon, Dummyshire"
    }
];

export default {
    get: (req, res) => res.send(mockData)
}
