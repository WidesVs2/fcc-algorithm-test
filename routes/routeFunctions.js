class Func {
    constructor(counter) {
        this._counter = counter
    }

    getDate() {
        let date = new Date()
        return date
    }

    getLocalDateString() {
        let date = this.getDate()
        let str = date.toLocaleString()
        return str
    }

    getUtcDateString() {
        let date = this.getDate()
        let str = date.toUTCString()
        return str
    }

    formatData(data, req, msg) {
        this.incrementCount()
        let date = this.getDate()
        let obj = {
            data,
            msg,
            count: data.length,
            _meta: {
                request_id: this._counter,
                request_method: req.method,
                request_url: req.originalUrl,
                request_date_local: this.getLocalDateString(), 
                request_date_UTC: this.getUtcDateString() 
            }
        }
        return obj
    }

    serveErr(err) {
        console.log(err)
        res.status(500).json({
            msg: 'Server Error',
            err
        })
    }

    incrementCount() {
        this._counter++
        return this._counter
    }

    decrementCount() {
        this._counter--
        return this._counter
    }
}

module.exports = Func = new Func(Math.floor(Math.random() * 10000))