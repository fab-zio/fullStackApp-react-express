export const defaultState = {
    users: [{
        id: "U1",
        name: "Dev"
    }, {
        id: "U2",
        name: "Fabrizio"
    }],
    groups: [{
        name: "To Do",
        id: "G1",
        owner: "U1"
    }, {
        name: "Doing",
        id: "G2",
        owner: "U1"
    }, {
        name: "Done",
        id: "G3",
        owner: "U1"
    }],
    tasks: [{
        name: "Do tests",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false
    }, {
        name: "Do tests",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false
    }, {
        name: "Meet with CTO",
        id: "T2",
        group: "G1",
        owner: "U1",
        isComplete: true
    }, {
        name: "Compile ES6",
        id: "T3",
        group: "G2",
        owner: "U2",
        isComplete: false
    }, {
        name: "Update component snapshot",
        id: "T4",
        group: "G2",
        owner: "U2",
        isComplete: false
    }],
    comments: [{
        owner: "U1",
        id: "C1",
        tasks: "T1",
        content: "Great work!"
    }]
}