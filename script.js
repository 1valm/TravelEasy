const state = {
    user: { loggedIn: false, name: "", email: "", phone: "", birthdate: "" },
    favorites: [1, 3, 5],
    bookings: [{ id: 1, tourId: 1, date: "2025-06-15", participants: 2, status: "confirmed", price: 5000 }, { id: 2, tourId: 3, date: "2025-07-20", participants: 1, status: "pending", price: 12900 }],
    history: [{ id: 1, tourId: 2, date: "2024-08-10", participants: 3, status: "completed", price: 17400 }, { id: 2, tourId: 4, date: "2024-05-22", participants: 2, status: "completed", price: 6400 }, { id: 3, tourId: 6, date: "2024-03-15", participants: 1, status: "cancelled", price: 6300 }],
    currentBooking: null,
    paymentMethod: null
};

const tours = {
    1: { id: 1, title: "Исторический центр Москвы", location: "Москва, Россия", duration: "4 часа", groupSize: "До 15 человек", rating: "4.9 (127 отзывов)", price: "₽2,500", type: "historical", durationDays: 1, ratingValue: 4.9, priceValue: 2500, images: ["img/Исторический центр Москвы.jpeg"], description: "Погрузитесь в богатую историю столицы России с посещением Кремля, Красной площади и других знаковых мест.", fullDescription: "<p>Этот тур предлагает уникальную возможность погрузиться в богатую историю столицы России. Вы посетите самые знаковые места Москвы, включая Красную площадь, Московский Кремль, храм Василия Блаженного и ГУМ.</p><p>Наш профессиональный гид расскажет вам fascinating истории о строительстве этих архитектурных шедевров, о важных исторических событиях, которые происходили на Красной площади, и о современной жизни в самом сердце Москвы.</p><p>Тур включает в себя пешеходную экскурсию по историческому центру с возможностью сделать потрясающие фотографии на фоне известных достопримечательностей. Мы также посетим Александровский сад и посмотрим на смену караула у Могилы Неизвестного Солдата.</p>", highlights: ["Профессиональный гид-экскурсовод", "Пешеходная экскурсия по историческому центру", "Посещение Красной площади и Московского Кремля", "Осмотр храма Василия Блаженного", "Прогулка по Александровскому саду", "Фотографии на память", "Карта Москвы с отметками достопримечательностей"], importantInfo: ["Тур проводится на русском и английском языках", "Рекомендуется удобная обувь для пешеходной экскурсии", "Тур проходит в любую погоду", "Место встречи: памятник Жукову на Манежной площади", "Не забудьте взять с собой фотоаппарат"] },
    2: { id: 2, title: "Озеро Байкал", location: "Иркутская область, Россия", duration: "3 дня", groupSize: "До 12 человек", rating: "4.8 (94 отзыва)", price: "₽5,800", type: "nature", durationDays: 3, ratingValue: 4.8, priceValue: 5800, images: ["img/Озеро Байкал.jpg"], description: "Исследуйте самое глубокое озеро в мире, насладитесь уникальной природой и познакомьтесь с местной культурой.", fullDescription: "<p>Отправьтесь в незабываемое путешествие к самому глубокому и одному из самых древних озер на планете - озеру Байкал. Этот трехдневный тур позволит вам полностью погрузиться в уникальную природу этого региона.</p><p>В первый день мы посетим Листвянку - ворота Байкала, где вы сможете увидеть исток Ангары и знаменитый Шаман-камень. Во второй день нас ждет путешествие на остров Ольхон - сердце Байкала, с его потрясающими пейзажами и богатой бурятской культурой. Третий день будет посвящен пешим прогулкам по живописным тропам и знакомству с местной флорой и фауной.</p>", highlights: ["Посещение поселка Листвянка", "Экскурсия на остров Ольхон", "Знакомство с бурятской культурой", "Прогулка по тайге с гидом-натуралистом", "Дегустация байкальского омуля", "Фотосессия на фоне байкальских пейзажей", "Посещение Байкальского музея"], importantInfo: ["Тур требует средней физической подготовки", "Рекомендуется теплая одежда даже летом", "Проживание в гостевых домах с комфортными условиями", "Питание включено в стоимость тура", "Не забудьте взять купальник для купания в Байкале"] },
    3: { id: 3, title: "Золотое кольцо России", location: "Центральная Россия", duration: "7 дней", groupSize: "До 20 человек", rating: "4.7 (156 отзывов)", price: "₽12,900", type: "cultural", durationDays: 7, ratingValue: 4.7, priceValue: 12900, images: ["img/Золотое кольцо России.jpg"], description: "Путешествие по древним городам России с богатым историческим и культурным наследием.", fullDescription: "<p>Золотое кольцо России - это уникальный маршрут, проходящий по древним городам Северо-Восточной Руси, в которых сохранились памятники истории и культуры России, центры народных ремесел.</p><p>За 7 дней мы посетим 8 городов: Сергиев Посад, Переславль-Залесский, Ростов Великий, Ярославль, Кострома, Иваново, Суздаль и Владимир. В каждом из этих городов вас ждут уникальные архитектурные ансамбли, древние монастыри и храмы, музеи и интересные истории от нашего профессионального гида.</p><p>Это путешествие позволит вам прикоснуться к истокам русской государственности, познакомиться с традициями и обычаями, а также насладиться прекрасной русской природой.</p>", highlights: ["Посещение 8 древних городов России", "Экскурсия по Троице-Сергиевой лавре", "Осмотр Ростовского кремля", "Знакомство с ярославской школой иконописи", "Дегустация традиционной русской кухни", "Посещение музея деревянного зодчества в Суздале", "Прогулка по владимирским Золотым воротам"], importantInfo: ["Тур включает переезды между городами на комфортабельном автобусе", "Проживание в отелях 3-4 звезды", "Питание: завтраки включены, обеды и ужины за дополнительную плату", "Экскурсии проводятся на русском языке", "Рекомендуется удобная обувь для пеших экскурсий"] },
    4: { id: 4, title: "Гастрономический Петербург", location: "Санкт-Петербург, Россия", duration: "6 часов", groupSize: "До 10 человек", rating: "4.6 (89 отзывов)", price: "₽3,200", type: "cultural", durationDays: 1, ratingValue: 4.6, priceValue: 3200, images: ["img/Гастрономический Петербург.jpg"], description: "Познакомьтесь с кулинарными традициями Северной столицы, посетите лучшие рестораны и рынки.", fullDescription: "<p>Этот гастрономический тур познакомит вас с богатыми кулинарными традициями Санкт-Петербурга. Мы посетим как знаменитые рестораны, так и скрытые от глаз туристов места, где готовят самую аутентичную питерскую еду.</p><p>Начнем мы с исторического центра, где попробуем традиционные петербургские блюда в ресторане с более чем 100-летней историей. Далее нас ждет посещение Кузнечного рынка, где мы познакомимся с местными продуктами и пообщаемся с продавцами. Завершим тур в современном гастрономическом пространстве, где шеф-повар расскажет о новых тенденциях в петербургской кухне.</p>", highlights: ["Дегустация в 5 различных заведениях", "Знакомство с историей петербургской кухни", "Посещение Кузнечного рынка", "Мастер-класс от шеф-повара", "Дегустация местных напитков", "Знакомство с гастрономическими традициями разных эпох", "Подарочный сертификат на следующее посещение"], importantInfo: ["Тур подходит для вегетарианцев (по предварительному уведомлению)", "Минимальный возраст участников - 18 лет", "Рекомендуется легкий завтрак перед туром", "Тур проходит в любую погоду", "Продолжительность тура может немного изменяться"] },
    5: { id: 5, title: "Альпийские луга Кавказа", location: "Кавказ, Россия", duration: "5 дней", groupSize: "До 8 человек", rating: "4.9 (67 отзывов)", price: "₽8,500", type: "adventure", durationDays: 5, ratingValue: 4.9, priceValue: 8500, images: ["img/Альпийские луга Кавказа.jpg"], description: "Пешие походы по живописным горным тропам с ночевкой в палатках и потрясающими видами.", fullDescription: "<p>Этот тур для тех, кто хочет отдохнуть от городской суеты и погрузиться в дикую природу Кавказских гор. Мы пройдем по самым живописным маршрутам, ночуя в палатках под звездным небом и наслаждаясь чистейшим горным воздухом.</p><p>Маршрут пролегает через альпийские луга, хвойные леса и горные перевалы. Мы увидим водопады, ледниковые озера и, если повезет, диких животных в их естественной среде обитания. Каждый день будет наполнен новыми открытиями и незабываемыми видами.</p><p>Наш опытный гид не только проведет вас по безопасному маршруту, но и расскажет о местной флоре и фауне, геологии региона и истории освоения Кавказа.</p>", highlights: ["Пешие походы по горным тропам", "Ночевки в палатках в живописных местах", "Восхождение на смотровые площадки", "Купание в горных озерах", "Знакомство с местной флорой и фауной", "Вечерние посиделки у костра", "Фотосессии на фоне потрясающих пейзажей"], importantInfo: ["Тур требует хорошей физической подготовки", "Необходимо специальное снаряжение (список предоставляется)", "Максимальный вес рюкзака - 15 кг", "Тур не рекомендуется людям с сердечно-сосудистыми заболеваниями", "Возраст участников - от 18 до 55 лет"] },
    6: { id: 6, title: "Архитектура Золотого кольца", location: "Владимир, Суздаль, Россия", duration: "2 дня", groupSize: "До 15 человек", rating: "4.7 (112 отзывов)", price: "₽6,300", type: "historical", durationDays: 2, ratingValue: 4.7, priceValue: 6300, images: ["img/Архитектура Золотого кольца.jpg"], description: "Исследуйте уникальную архитектуру древнерусских городов с профессиональным гидом-искусствоведом.", fullDescription: "<p>Этот специализированный тур посвящен архитектуре древнерусских городов Владимира и Суздаля. В сопровождении профессионального гида-искусствоведа вы познакомитесь с уникальными памятниками белокаменного зодчества XII-XIII веков.</p><p>В первый день мы исследуем Владимир - древнюю столицу Северо-Восточной Руси. Вы увидите Успенский собор с фресками Андрея Рублева, Дмитриевский собор с его знаменитой резьбой по камню и Золотые ворота - редкий памятник военно-инженерного искусства.</p><p>Второй день будет посвящен Суздалю - городу-музею под открытым небом. Мы посетим Суздальский кремль, Спасо-Евфимиев монастырь и Музей деревянного зодчества, где собраны уникальные образцы народной архитектуры.</p>", highlights: ["Экскурсия с профессиональным искусствоведом", "Посещение Успенского и Дмитриевского соборов во Владимире", "Осмотр Суздальского кремля", "Экскурсия по Спасо-Евфимиеву монастырю", "Посещение Музея деревянного зодчества", "Знакомство с техникой белокаменной резьбы", "Лекция о развитии древнерусской архитектуры"], importantInfo: ["Тур подходит для людей с любым уровнем подготовки", "Проживание в гостинице в историческом центре Суздаля", "Питание: завтраки включены в стоимость", "Рекомендуется взять с собой блокнот для записей", "Фотосъемка разрешена во всех местах"] }
};

document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedTours();
    renderCatalogTours();
    updateAuthButtons();
    loadAccountData();
    document.getElementById('booking-date').min = new Date().toISOString().split('T')[0];
});

function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    window.scrollTo(0, 0);
    const header = document.getElementById('header');
    if (pageId === 'catalog' || pageId === 'tour-detail' || pageId === 'booking') header.classList.add('scrolled');
    if (pageId === 'catalog') renderCatalogTours();
}

function showAccountSection(sectionId) {
    document.querySelectorAll('.account-section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId + '-section').classList.add('active');
    document.querySelectorAll('.account-nav a').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
    showPage('account');
}

function showTourDetail(tourId) {
    const tour = tours[tourId];
    if (!tour) return;
    const tourDetailContent = document.getElementById('tour-detail-content');
    let galleryHTML = '<div class="tour-gallery">';
    tour.images.forEach((img, index) => galleryHTML += `<img src="${img}" alt="${tour.title}" ${index === 0 ? 'class="gallery-main"' : ''}>`);
    galleryHTML += '</div>';
    let highlightsHTML = '';
    if (tour.highlights && tour.highlights.length > 0) {
        highlightsHTML += '<div class="tour-highlights"><h3>Что включено в тур:</h3><ul>';
        tour.highlights.forEach(highlight => highlightsHTML += `<li>${highlight}</li>`);
        highlightsHTML += '</ul></div>';
    }
    let importantInfoHTML = '';
    if (tour.importantInfo && tour.importantInfo.length > 0) {
        importantInfoHTML += '<div class="tour-highlights"><h3>Важная информация:</h3><ul>';
        tour.importantInfo.forEach(info => importantInfoHTML += `<li>${info}</li>`);
        importantInfoHTML += '</ul></div>';
    }
    const isFavorite = state.favorites.includes(tourId);
    const favoriteIcon = isFavorite ? 'fas' : 'far';
    tourDetailContent.innerHTML = `
        <div class="tour-detail">
            <div class="tour-info">
                ${galleryHTML}
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h1>${tour.title}</h1>
                    <button class="btn btn-outline" onclick="toggleFavorite(${tourId})" style="margin-left: 1rem;"><i class="${favoriteIcon} fa-heart"></i></button>
                </div>
                <div class="tour-meta">
                    <div class="tour-meta-item"><i class="fas fa-map-marker-alt"></i><span>${tour.location}</span></div>
                    <div class="tour-meta-item"><i class="far fa-clock"></i><span>${tour.duration}</span></div>
                    <div class="tour-meta-item"><i class="fas fa-users"></i><span>${tour.groupSize}</span></div>
                    <div class="tour-meta-item"><i class="fas fa-star"></i><span>${tour.rating}</span></div>
                </div>
                <div class="tour-description-full">${tour.fullDescription}</div>
                ${highlightsHTML}${importantInfoHTML}
            </div>
            <div class="booking-form">
                <div class="booking-price">${tour.price} <span>/человек</span></div>
                <div class="form-group"><label for="tour-date">Дата тура</label><input type="date" id="tour-date" required></div>
                <div class="form-group"><label for="participants">Количество участников</label><select id="participants"><option value="1">1 участник</option><option value="2">2 участника</option><option value="3">3 участника</option><option value="4">4 участника</option><option value="5">5 участников</option><option value="6">6 участников</option></select></div>
                <button class="book-now" onclick="startBooking(${tourId})">Забронировать сейчас</button>
                <div style="margin-top: 1.5rem; text-align: center;"><a href="#" onclick="showPage('catalog')" style="color: var(--primary); text-decoration: none;"><i class="fas fa-arrow-left"></i> Вернуться к каталогу</a></div>
            </div>
        </div>`;
    document.getElementById('tour-date').min = new Date().toISOString().split('T')[0];
    showPage('tour-detail');
}

function startBooking(tourId) {
    if (!state.user.loggedIn) { 
        alert('Для бронирования тура необходимо войти в систему'); 
        showAuthModal('login');
        return; 
    }
    const tour = tours[tourId];
    const date = document.getElementById('tour-date').value;
    const participants = parseInt(document.getElementById('participants').value);
    if (!date) { alert('Пожалуйста, выберите дата тура'); return; }
    state.currentBooking = { tourId: tourId, date: date, participants: participants, name: state.user.name, email: state.user.email, phone: state.user.phone, comment: '', paymentMethod: null, total: tour.priceValue * participants };
    const bookingTourInfo = document.getElementById('booking-tour-info');
    bookingTourInfo.innerHTML = `
        <div class="tour-gallery"><img src="${tour.images[0]}" alt="${tour.title}" class="gallery-main"></div>
        <h1>${tour.title}</h1>
        <div class="tour-meta">
            <div class="tour-meta-item"><i class="fas fa-map-marker-alt"></i><span>${tour.location}</span></div>
            <div class="tour-meta-item"><i class="far fa-clock"></i><span>${tour.duration}</span></div>
            <div class="tour-meta-item"><i class="fas fa-users"></i><span>${tour.groupSize}</span></div>
        </div>`;
    document.getElementById('booking-date').value = date;
    document.getElementById('booking-participants').value = participants;
    document.getElementById('booking-name').value = state.user.name;
    document.getElementById('booking-email').value = state.user.email;
    document.getElementById('booking-phone').value = state.user.phone;
    resetBookingSteps();
    showPage('booking');
}

function resetBookingSteps() {
    document.getElementById('step-1').className = 'booking-step step-active';
    document.getElementById('step-2').className = 'booking-step';
    document.getElementById('step-3').className = 'booking-step';
    document.getElementById('booking-data').className = 'booking-section active';
    document.getElementById('booking-payment').className = 'booking-section';
    document.getElementById('booking-confirmation').className = 'booking-section';
    state.paymentMethod = null;
    document.querySelectorAll('.payment-method').forEach(method => method.classList.remove('selected'));
    document.getElementById('card-form').style.display = 'none';
}

function goToPayment() {
    const name = document.getElementById('booking-name').value;
    const email = document.getElementById('booking-email').value;
    const phone = document.getElementById('booking-phone').value;
    const date = document.getElementById('booking-date').value;
    const participants = document.getElementById('booking-participants').value;
    if (!name || !email || !phone || !date) { alert('Пожалуйста, заполните все обязательные поля'); return; }
    state.currentBooking.name = name;
    state.currentBooking.email = email;
    state.currentBooking.phone = phone;
    state.currentBooking.date = date;
    state.currentBooking.participants = parseInt(participants);
    state.currentBooking.comment = document.getElementById('booking-comment').value;
    const tour = tours[state.currentBooking.tourId];
    document.getElementById('payment-tour-name').textContent = tour.title;
    document.getElementById('payment-date').textContent = formatDate(state.currentBooking.date);
    document.getElementById('payment-participants').textContent = state.currentBooking.participants + ' участника';
    document.getElementById('payment-price').textContent = tour.price + ' × ' + state.currentBooking.participants;
    document.getElementById('payment-total').textContent = state.currentBooking.total + ' ₽';
    document.getElementById('step-1').className = 'booking-step step-completed';
    document.getElementById('step-2').className = 'booking-step step-active';
    document.getElementById('booking-data').className = 'booking-section';
    document.getElementById('booking-payment').className = 'booking-section active';
}

function goToData() {
    document.getElementById('step-1').className = 'booking-step step-active';
    document.getElementById('step-2').className = 'booking-step';
    document.getElementById('booking-data').className = 'booking-section active';
    document.getElementById('booking-payment').className = 'booking-section';
}

function selectPaymentMethod(method) {
    state.paymentMethod = method;
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
    event.target.closest('.payment-method').classList.add('selected');
    if (method === 'card') document.getElementById('card-form').style.display = 'grid';
    else document.getElementById('card-form').style.display = 'none';
}

function goToConfirmation() {
    if (!state.paymentMethod) { alert('Пожалуйста, выберите способ оплаты'); return; }
    if (state.paymentMethod === 'card') {
        const cardNumber = document.getElementById('card-number').value;
        const cardExpiry = document.getElementById('card-expiry').value;
        const cardCvc = document.getElementById('card-cvc').value;
        const cardHolder = document.getElementById('card-holder').value;
        if (!cardNumber || !cardExpiry || !cardCvc || !cardHolder) { alert('Пожалуйста, заполните все данные карты'); return; }
        if (cardNumber.replace(/\s/g, '').length !== 16) { alert('Номер карты должен содержать 16 цифр'); return; }
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) { alert('Срок действия карты должен быть в формате ММ/ГГ'); return; }
        if (cardCvc.length !== 3) { alert('CVC код должен содержать 3 цифры'); return; }
    }
    const tour = tours[state.currentBooking.tourId];
    document.getElementById('confirm-tour-name').textContent = tour.title;
    document.getElementById('confirm-date').textContent = formatDate(state.currentBooking.date);
    document.getElementById('confirm-participants').textContent = state.currentBooking.participants + ' участника';
    document.getElementById('confirm-name').textContent = state.currentBooking.name;
    document.getElementById('confirm-email').textContent = state.currentBooking.email;
    document.getElementById('confirm-phone').textContent = state.currentBooking.phone;
    document.getElementById('confirm-payment').textContent = getPaymentMethodName(state.paymentMethod);
    document.getElementById('confirm-total').textContent = state.currentBooking.total + ' ₽';
    document.getElementById('step-2').className = 'booking-step step-completed';
    document.getElementById('step-3').className = 'booking-step step-active';
    document.getElementById('booking-payment').className = 'booking-section';
    document.getElementById('booking-confirmation').className = 'booking-section active';
}

function completeBooking() {
    const newBooking = { id: state.bookings.length + 1, tourId: state.currentBooking.tourId, date: state.currentBooking.date, participants: state.currentBooking.participants, status: 'confirmed', price: state.currentBooking.total, paymentMethod: state.paymentMethod };
    state.bookings.push(newBooking);
    const bookingNumber = 'TE-2025-' + String(newBooking.id).padStart(3, '0');
    document.getElementById('booking-number').textContent = bookingNumber;
    showPage('success');
}

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
}

function getPaymentMethodName(method) {
    const methods = { 'card': 'Банковская карта', 'paypal': 'PayPal' };
    return methods[method] || method;
}

function renderFeaturedTours() {
    const featuredToursContainer = document.getElementById('featured-tours');
    let featuredToursHTML = '';
    Object.values(tours).slice(0, 3).forEach(tour => featuredToursHTML += generateTourCardHTML(tour));
    featuredToursContainer.innerHTML = featuredToursHTML;
}

function renderCatalogTours(filteredTours = null) {
    const catalogToursContainer = document.getElementById('catalog-tours');
    let catalogToursHTML = '';
    const toursToRender = filteredTours || Object.values(tours);
    if (toursToRender.length === 0) catalogToursHTML = '<div class="empty-state" style="grid-column: 1 / -1;"><i class="fas fa-search"></i><h3>Туры не найдены</h3><p>Попробуйте изменить параметры фильтрации</p></div>';
    else toursToRender.forEach(tour => catalogToursHTML += generateTourCardHTML(tour));
    catalogToursContainer.innerHTML = catalogToursHTML;
}

function generateTourCardHTML(tour) {
    const isFavorite = state.favorites.includes(tour.id);
    const favoriteIcon = isFavorite ? 'fas' : 'far';
    return `
        <div class="tour-card" data-type="${tour.type}" data-duration="${tour.durationDays}" data-rating="${tour.ratingValue}" data-price="${tour.priceValue}">
            <div class="tour-badge">${getTourBadge(tour.id)}</div>
            <img src="${tour.images[0]}" alt="${tour.title}" class="tour-image">
            <div class="tour-content">
                <h3 class="tour-title">${tour.title}</h3>
                <div class="tour-location"><i class="fas fa-map-marker-alt"></i><span>${tour.location}</span></div>
                <p class="tour-description">${tour.description}</p>
                <div class="tour-features">
                    <div class="tour-feature"><i class="far fa-clock"></i><span>${tour.duration}</span></div>
                    <div class="tour-feature"><i class="fas fa-users"></i><span>${tour.groupSize}</span></div>
                    <div class="tour-feature"><i class="fas fa-star"></i><span>${tour.rating}</span></div>
                </div>
                <div class="tour-footer">
                    <div class="tour-price">${tour.price} <span>/человек</span></div>
                    <div>
                        <button class="btn btn-outline" onclick="toggleFavorite(${tour.id})"><i class="${favoriteIcon} fa-heart"></i></button>
                        <button class="btn btn-primary" onclick="showTourDetail(${tour.id})">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>`;
}

function getTourBadge(tourId) {
    const badges = { 1: 'Популярно', 2: 'Хит сезона', 3: 'Рекомендуем', 4: 'Новинка', 5: '', 6: 'Скидка 10%' };
    return badges[tourId] || '';
}

function applyFilters() {
    const typeFilters = [];
    document.querySelectorAll('input[type="checkbox"][id^="type-"]:checked').forEach(checkbox => typeFilters.push(checkbox.value));
    const priceMin = parseInt(document.getElementById('price-min').value) || 0;
    const priceMax = parseInt(document.getElementById('price-max').value) || 20000;
    const durationFilters = [];
    document.querySelectorAll('input[type="checkbox"][id^="duration-"]:checked').forEach(checkbox => durationFilters.push(parseInt(checkbox.value)));
    const ratingFilters = [];
    document.querySelectorAll('input[type="checkbox"][id^="rating-"]:checked').forEach(checkbox => ratingFilters.push(parseFloat(checkbox.value)));
    const sortValue = document.getElementById('sort-select').value;
    let filteredTours = Object.values(tours).filter(tour => {
        if (typeFilters.length > 0 && !typeFilters.includes(tour.type)) return false;
        if (tour.priceValue < priceMin || tour.priceValue > priceMax) return false;
        if (durationFilters.length > 0) {
            let durationMatch = false;
            for (const duration of durationFilters) {
                if (duration === 1 && tour.durationDays <= 1) { durationMatch = true; break; }
                else if (duration === 3 && tour.durationDays >= 2 && tour.durationDays <= 3) { durationMatch = true; break; }
                else if (duration === 7 && tour.durationDays >= 4 && tour.durationDays <= 7) { durationMatch = true; break; }
                else if (duration === 14 && tour.durationDays > 7) { durationMatch = true; break; }
            }
            if (!durationMatch) return false;
        }
        if (ratingFilters.length > 0) {
            let ratingMatch = false;
            for (const rating of ratingFilters) {
                if (tour.ratingValue >= rating) { ratingMatch = true; break; }
            }
            if (!ratingMatch) return false;
        }
        return true;
    });
    if (sortValue === 'price-low') filteredTours.sort((a, b) => a.priceValue - b.priceValue);
    else if (sortValue === 'price-high') filteredTours.sort((a, b) => b.priceValue - a.priceValue);
    else if (sortValue === 'rating') filteredTours.sort((a, b) => b.ratingValue - a.ratingValue);
    else filteredTours.sort((a, b) => a.id - b.id);
    renderCatalogTours(filteredTours);
}

function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = true);
    document.getElementById('price-min').value = 0;
    document.getElementById('price-max').value = 20000;
    document.getElementById('sort-select').value = 'popular';
    renderCatalogTours();
}

function toggleFavorite(tourId) {
    if (!state.user.loggedIn) {
        alert('Для добавления в избранное необходимо войти в систему');
        showAuthModal('login');
        return;
    }
    if (state.favorites.includes(tourId)) state.favorites = state.favorites.filter(id => id !== tourId);
    else state.favorites.push(tourId);
    renderFeaturedTours();
    renderCatalogTours();
    if (document.getElementById('favorites-section').classList.contains('active')) loadFavorites();
    if (document.getElementById('tour-detail').classList.contains('active')) {
        const isFavorite = state.favorites.includes(tourId);
        const favoriteIcon = isFavorite ? 'fas' : 'far';
        const favoriteButton = document.querySelector('.tour-detail .btn-outline');
        if (favoriteButton) favoriteButton.innerHTML = `<i class="${favoriteIcon} fa-heart"></i>`;
    }
}

function toggleUserMenu() {
    document.getElementById('userDropdown').classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const userMenu = document.querySelector('.user-menu');
    if (!userMenu.contains(event.target)) document.getElementById('userDropdown').classList.remove('active');
});

function updateAuthButtons() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userMenu = document.querySelector('.user-menu');
    if (state.user.loggedIn) { loginBtn.style.display = 'none'; registerBtn.style.display = 'none'; userMenu.style.display = 'block'; }
    else { loginBtn.style.display = 'block'; registerBtn.style.display = 'block'; userMenu.style.display = 'none'; }
}

function showAuthModal(tab) {
    document.getElementById('auth-modal').classList.add('active');
    switchAuthTab(tab);
}

function closeAuthModal() {
    document.getElementById('auth-modal').classList.remove('active');
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-content').forEach(c => c.classList.remove('active'));
    
    document.querySelector(`.auth-tab[onclick="switchAuthTab('${tab}')"]`).classList.add('active');
    document.getElementById(`${tab}-content`).classList.add('active');
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    // В реальном приложении здесь была бы проверка с сервером
    state.user.loggedIn = true;
    state.user.name = "Иван Иванов";
    state.user.email = email;
    state.user.phone = "+7 (999) 123-45-67";
    state.user.birthdate = "1990-05-15";
    
    updateAuthButtons();
    closeAuthModal();
    alert('Вы успешно вошли в систему!');
}

function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (!name || !email || !password || !confirmPassword) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }
    
    if (password.length < 6) {
        alert('Пароль должен содержать не менее 6 символов');
        return;
    }
    
    // В реальном приложении здесь была бы регистрация на сервере
    state.user.loggedIn = true;
    state.user.name = name;
    state.user.email = email;
    state.user.phone = "";
    state.user.birthdate = "";
    
    updateAuthButtons();
    closeAuthModal();
    alert('Регистрация прошла успешно!');
}

function logout() { 
    state.user.loggedIn = false; 
    state.user.name = "";
    state.user.email = "";
    state.user.phone = "";
    state.user.birthdate = "";
    updateAuthButtons(); 
    document.getElementById('userDropdown').classList.remove('active'); 
    showPage('home'); 
    alert('Вы вышли из системы'); 
}

function saveProfile() {
    state.user.name = document.getElementById('profile-name').value;
    state.user.email = document.getElementById('profile-email').value;
    state.user.phone = document.getElementById('profile-phone').value;
    state.user.birthdate = document.getElementById('profile-birthdate').value;
    alert('Профиль успешно сохранен!');
}

function loadAccountData() { loadBookings(); loadHistory(); loadFavorites(); loadProfile(); }

function loadBookings() {
    const bookingsList = document.getElementById('bookings-list');
    if (state.bookings.length === 0) {
        bookingsList.innerHTML = `<div class="empty-state"><i class="fas fa-suitcase"></i><h3>У вас нет активных бронирований</h3><p>Найдите интересный тур и забронируйте его</p><button class="btn btn-primary" onclick="showPage('catalog')">Найти тур</button></div>`;
        return;
    }
    let bookingsHTML = '';
    state.bookings.forEach(booking => {
        const tour = tours[booking.tourId];
        const statusClass = `status-${booking.status}`;
        const statusText = { 'confirmed': 'Подтверждено', 'pending': 'Ожидание', 'cancelled': 'Отменено' }[booking.status];
        bookingsHTML += `
            <div class="booking-item">
                <img src="${tour.images[0]}" alt="${tour.title}" class="booking-image">
                <div class="booking-info">
                    <h3>${tour.title}</h3>
                    <div class="booking-meta">
                        <span><i class="far fa-calendar"></i> ${booking.date}</span>
                        <span><i class="fas fa-users"></i> ${booking.participants} участника</span>
                        <span><i class="fas fa-wallet"></i> ${booking.price} ₽</span>
                    </div>
                    <div><span class="booking-status ${statusClass}">${statusText}</span></div>
                </div>
            </div>`;
    });
    bookingsList.innerHTML = bookingsHTML;
}

function loadHistory() {
    const historyList = document.getElementById('history-list');
    if (state.history.length === 0) {
        historyList.innerHTML = `<div class="empty-state"><i class="fas fa-history"></i><h3>История заказов пуста</h3><p>Здесь будут отображаться ваши завершенные заказы</p></div>`;
        return;
    }
    let historyHTML = '';
    state.history.forEach(booking => {
        const tour = tours[booking.tourId];
        const statusClass = `status-${booking.status}`;
        const statusText = { 'completed': 'Завершено', 'cancelled': 'Отменено' }[booking.status];
        historyHTML += `
            <div class="booking-item">
                <img src="${tour.images[0]}" alt="${tour.title}" class="booking-image">
                <div class="booking-info">
                    <h3>${tour.title}</h3>
                    <div class="booking-meta">
                        <span><i class="far fa-calendar"></i> ${booking.date}</span>
                        <span><i class="fas fa-users"></i> ${booking.participants} участника</span>
                        <span><i class="fas fa-wallet"></i> ${booking.price} ₽</span>
                    </div>
                    <div><span class="booking-status ${statusClass}">${statusText}</span></div>
                </div>
            </div>`;
    });
    historyList.innerHTML = historyHTML;
}

function loadFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    if (state.favorites.length === 0) {
        favoritesList.innerHTML = `<div class="empty-state"><i class="fas fa-heart"></i><h3>В избранном пусто</h3><p>Добавляйте туры в избранное, чтобы не потерять</p><button class="btn btn-primary" onclick="showPage('catalog')">Найти тур</button></div>`;
        return;
    }
    let favoritesHTML = '';
    state.favorites.forEach(tourId => {
        const tour = tours[tourId];
        favoritesHTML += `
            <div class="favorite-item">
                <img src="${tour.images[0]}" alt="${tour.title}" class="favorite-image">
                <div class="favorite-info">
                    <h3>${tour.title}</h3>
                    <div class="favorite-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${tour.location}</span>
                        <span><i class="far fa-clock"></i> ${tour.duration}</span>
                        <span><i class="fas fa-star"></i> ${tour.rating}</span>
                    </div>
                    <div class="tour-footer">
                        <div class="tour-price">${tour.price} <span>/человек</span></div>
                        <div>
                            <button class="btn btn-outline" onclick="toggleFavorite(${tour.id})"><i class="fas fa-heart"></i></button>
                            <button class="btn btn-primary" onclick="showTourDetail(${tour.id})">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    favoritesList.innerHTML = favoritesHTML;
}

function loadProfile() {
    document.getElementById('profile-name').value = state.user.name;
    document.getElementById('profile-email').value = state.user.email;
    document.getElementById('profile-phone').value = state.user.phone;
    document.getElementById('profile-birthdate').value = state.user.birthdate;
}

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else {
        const activePage = document.querySelector('.page-content.active');
        if (activePage && activePage.id === 'home') header.classList.remove('scrolled');
    }
});

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.tour-card, .feature-card, .testimonial-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

document.getElementById('sort-select').addEventListener('change', applyFilters);

document.getElementById('card-number').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = value.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];
    for (let i=0; i<match.length; i+=4) parts.push(match.substring(i, i+4));
    if (parts.length) e.target.value = parts.join(' ');
    else e.target.value = value;
});

document.getElementById('card-expiry').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (value.length >= 2) e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
    else e.target.value = value;
});