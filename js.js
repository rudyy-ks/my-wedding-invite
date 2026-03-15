// Дата свадьбы
const weddingDate = new Date("June 20, 2026 16:00").getTime(); // Уточнили время до 16:00

// Обновление таймера каждую секунду
setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime(); // Текущее время
    const timeLeft = weddingDate - now; // Оставшееся время

    // Проверка окончания срока
    if (timeLeft <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    // Рассчитываем количество оставшихся дней, часов, минут и секунд
    const totalSeconds = Math.floor(timeLeft / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    // Обновляем DOM-элементы
    document.getElementById("days").textContent = days.toString().padStart(2, '0') + ' :';
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0') + ' :';;
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0') + ' :';;
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}