export function Depositar(props) {
    return (
        <div>
            <button
                style={{'marginTop': '16px'}}
                onClick={() => props.depositar()}
            >Depositar
            </button>
        </div>
    );
}