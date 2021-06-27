import './calculator.css'
import Nav from '../components/Nav'

function Calculator() {
    function insert(num) {
        document.form.textview.value =
            document.form.textview.value + num;
    }

    function clean() {
        document.form.textview.value = ''
    }

    function back() {
        let exp = document.form.textview.value;
        document.form.textview.value = exp.substring(0, exp.length - 1)
    }

    function equal() {
        let exp = document.form.textview.value;
        if (exp) (
            // eslint-disable-next-line
            document.form.textview.value = eval(exp)
        )
    }
    return (
        <div>
            <Nav />
            <div className="container_calculator">
                <div className=" input">
                    <form name="form">
                        <input type="text" name="textview" readonly />
                    </form>
                </div>
                <div className="item clean" onClick={() => clean()}>C</div>
                <div className="item back" onClick={() => back()}>&larr;</div>
                <div className="item" onClick={() => insert('+')}>+</div>
                <div className="item" onClick={() => insert('-')}>-</div>
                <div className="item" onClick={() => insert('*')}>&times;</div>
                <div className="item" onClick={() => insert('/')}>&divide;</div>
                <div className="item" onClick={() => insert(7)}>7</div>
                <div className="item" onClick={() => insert(8)}>8</div>
                <div className="item" onClick={() => insert(9)}>9</div>
                <div className="item" onClick={() => insert(4)}>4</div>
                <div className="item" onClick={() => insert(5)}>5</div>
                <div className="item" onClick={() => insert(6)}>6</div>
                <div className="item" onClick={() => insert(1)}>1</div>
                <div className="item" onClick={() => insert(2)}>2</div>
                <div className="item" onClick={() => insert(3)}>3</div>
                <div className="item equal" onClick={() => equal()}>=</div>
                <div className="item zero" onClick={() => insert(0)}>0</div>
                <div className="item" onClick={() => insert('.')}>.</div>
            </div>
        </div>
    )
}

export default Calculator