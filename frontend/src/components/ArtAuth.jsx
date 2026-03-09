function ArtAuth({ type, img }) {
    return (
        <div className={`art ${type} dir-right`}>
            <span>
                BYTE DONTO
            </span>

            <img src={img} />
        </div>
    );
}

export default ArtAuth;