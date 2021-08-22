const rewire = require("rewire")
const rename = rewire("./rename")
const readInput = rename.__get__("readInput")
const renameFiles = rename.__get__("renameFiles")
const updateProjectName = rename.__get__("updateProjectName")
const updatePackageName = rename.__get__("updatePackageName")
const renameProjectFiles = rename.__get__("renameProjectFiles")
const renameCompanyFiles = rename.__get__("renameCompanyFiles")
const run = rename.__get__("run")
// @ponicode
describe("readInput", () => {
    test("0", () => {
        let callFunction = () => {
            readInput("DUMMYNAME")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            readInput("$dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            readInput("dummyname")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            readInput("/dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            readInput("dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            readInput(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renameFiles", () => {
    test("0", () => {
        let callFunction = () => {
            renameFiles(-10, ["path/to/file.ext", "path/to/file.ext", "C:\\\\path\\to\\file.ext"], "path/to/folder/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renameFiles(0, "path/to/folder/", "./path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renameFiles(10, "path/to/folder/", "./path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renameFiles(10, ["path/to/folder/", ".", "C:\\\\path\\to\\folder\\"], "path/to/file.ext")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            renameFiles(10, "path/to/file.ext", "./path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            renameFiles(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updateProjectName", () => {
    test("0", () => {
        let callFunction = () => {
            updateProjectName("dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            updateProjectName("/dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            updateProjectName("dummyName123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            updateProjectName("dummy_name/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            updateProjectName("DUMMYNAME")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            updateProjectName(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updatePackageName", () => {
    test("0", () => {
        let callFunction = () => {
            updatePackageName("Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            updatePackageName("Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            updatePackageName("Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            updatePackageName("Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            updatePackageName(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renameProjectFiles", () => {
    test("0", () => {
        let callFunction = () => {
            renameProjectFiles("dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renameProjectFiles("dummy_name/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renameProjectFiles("dummy_NAme")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renameProjectFiles("/dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            renameProjectFiles("dummyname")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            renameProjectFiles(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renameCompanyFiles", () => {
    test("0", () => {
        let callFunction = () => {
            renameCompanyFiles("DUMMYNAME")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renameCompanyFiles("dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renameCompanyFiles("dummyname")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renameCompanyFiles("dummyName123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            renameCompanyFiles("dummy_name/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            renameCompanyFiles(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("run", () => {
    test("0", async () => {
        await run()
    })
})
