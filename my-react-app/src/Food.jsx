function Food(){
    const menu1 = "Ugali Maharage";
    const menu2 = "Pilau Kuku";

    return(
        <ul>
            <li>Biriani Ngombe</li>
            <li>{menu1}</li>
            <li>{menu2.toLocaleUpperCase()}</li>
        </ul>
    );
}

export default Food