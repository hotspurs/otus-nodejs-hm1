import { makeTree } from './lib/make_tree';

test('makeThree without items', () => {
    const structure = {
        "name": 1,
        "items": []
    };
    expect(makeTree(structure)).toBe(`
1
`);
});

test('makeThree items first level', () => {
    const structure = {
        "name": 1,
        "items": [
            {
                "name": 2
            },
            {
                "name": 3
            }
        ]
    }
    expect(makeTree(structure)).toBe(`
1
└──2
└──3
`
);
});

test('makeThree items second level', () => {
    const structure = {
        "name": 1,
        "items": [
            {
                "name": 2,
                "items": [
                    {
                        "name": 3
                    },
                    {
                        "name": 4
                    }
                ]
            },
            {
                "name": 5
            }
        ]
    }
    expect(makeTree(structure)).toBe(`
1
├──2
│ └──3
│ └──4
└──5
`
);
});


test('makeThree items thrid level', () => {
    const structure = {
        "name": 1,
        "items": [
            {
                "name": 2,
                "items": [
                    {
                        "name": 3,
                        "items": [
                            {
                                "name": 31
                            },
                            {
                                "name": 32
                            },
                            {
                                "name": 33
                            }
                        ]
                    },
                    {
                        "name": 4
                    }
                ]
            },
            {
                "name": 5
            }
        ]
    }
    expect(makeTree(structure)).toBe(`
1
├──2
│ ├──3
│ │ └──31
│ │ └──32
│ │ └──33
│ └──4
└──5
`);
});

test('makeThree last element with items', () => {
    const structure = {
        "name": 1,
        "items": [
            {
                "name": 2,
                "items": [
                    {
                        "name": 3,
                        "items": [
                            {
                                "name": 31
                            },
                            {
                                "name": 32
                            },
                            {
                                "name": 33
                            }
                        ]
                    },
                    {
                        "name": 4
                    }
                ]
            },
            {
                "name": 5,
                "items": [
                    {
                        "name": 6
                    }
                ]
            }
        ]
    }
    expect(makeTree(structure)).toBe(`
1
├──2
│ ├──3
│ │ └──31
│ │ └──32
│ │ └──33
│ └──4
└──5
└──6
`);
});

test('makeThree last element with items #2', () => {
    const structure = {
        "name": 1,
        "items": [
            {
                "name": 2,
                "items": [
                    {
                        "name": 3,
                        "items": [
                            {
                                "name": 31
                            },
                            {
                                "name": 32
                            },
                            {
                                "name": 33
                            }
                        ]
                    },
                    {
                        "name": 4,
                        "items": [
                            {
                                "name": 41
                            },
                            {
                                "name": 42
                            }
                        ]
                    }
                ]
            },
            {
                "name": 5,
                "items": [
                    {
                        "name": 6
                    }
                ]
            }
        ]
    }
    expect(makeTree(structure)).toBe(`
1
├──2
│ ├──3
│ │ └──31
│ │ └──32
│ │ └──33
│ └──4
│ └──41
│ └──42
└──5
└──6
`);
});