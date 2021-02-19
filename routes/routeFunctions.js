class Functions {
    constructor(counter) {
        this._counter = Math.floor(Math.random() * counter) 
    }

    log(x) {
        console.log(x)
    }

    increment() {
        this._counter++
        this.log(this._counter)
        return this._counter
    }

    decrement() {
        this._counter--
        this.log(this._counter)
        return this._counter
    }

    formatData(data, route, msg) {
        this.log('Formatting...')
        let arr = []
        for (let i = 0; i < data.length; i++) {
            arr.push({
                msg: `Success: ${msg}`,
                count: data.length, 
                data: data[i],
                meta: {
                    request_id: this._counter, 
                    request_at: {
                        GMT: new Date(Date.now()).toUTCString(),
                        Local: `${new Date(Date.now()).toLocaleDateString()} ${new Date(Date.now()).toLocaleTimeString()}`
                    },
                    route: route
                }
                     
            })
        }
        this.log('Formatted')
        return arr
    }

    formatSingleData(data, route, msg) {
        this.log('Formatting...')
        let arr = []
        arr.push({
            msg: `Success: ${msg}`,
                count: data.length, 
                data: data,
                meta: {
                    request_id: this._counter, 
                    request_at: {
                        GMT: new Date(Date.now()).toUTCString(),
                        Local: `${new Date(Date.now()).toLocaleDateString()} ${new Date(Date.now()).toLocaleTimeString()}`
                    },
                    route: route
                }
        })
        this.log('Formatted')
        return arr
    }
    
}

module.exports = Functions