const app = require("express")();
const PORT = 8080;

app.get("/", (req, res) => {
    res.status(200).send({
        status: "healthy"
    })
});

app.get("/case", (req, res) => {
    res.status(200).send({
        caseId: "A1234",
        caseType: "PAY-001",
        caseDescription: "Payment",
        caseHandlers:[
            {
                handlerId: "BOHAND",
                firstName: "Bob",
                lastName: "Handlerson",
                phone: "555 011 02",
                email: "bob.test@company.com"
            }
        ],
        caseUsers:[
            {
                userName: "leetKid69",
                firstName: "Timmy",
                lastName: "McTest",
                phone: "",
                email: "leetKid69@zoomer.com"
            },
            {
                userName: "HMTQ",
                firstName: "Elizabeth II",
                lastName: "Windsor",
                phone: "1",
                email: "queen@gov.co.uk"
            }
        ]
    })
});

app.listen(
    PORT,
    () => console.log(`app is alive on http://localhost:${PORT}`)
);