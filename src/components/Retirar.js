export function Retirar(props) {
    return (
        <div>
            <button
                style={{'marginTop': '16px'}}
                onClick={() => props.retirar()}
            >Retirar
            </button>
        </div>
    );
}