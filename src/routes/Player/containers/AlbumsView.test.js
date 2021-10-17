const AlbumsView = require("./AlbumsView")
// @ponicode
describe("AlbumsView.mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            AlbumsView.mapStateToProps()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("AlbumsView.mapDispatchToProps", () => {
    test("0", () => {
        let callFunction = () => {
            AlbumsView.mapDispatchToProps()
        }
    
        expect(callFunction).not.toThrow()
    })
})
