export function saludoByHora() {
    const hora = new Date().getHours();

    if (hora >= 6 && hora < 12) {
        return "Buenos días";
    } else if (hora >= 12 && hora < 18) {
        return "Buenas tardes";
    } else {
        return "Buenas noches";
    }

}