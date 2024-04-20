import data from './data.json'
const mockFetch = (url, options) => {
    // Ваша логика обработки запроса здесь
    // Например, можно возвращать фиктивные данные или симулировать поведение сервера
    return new Promise((resolve, reject) => {
        // Фиктивные данные
        const mockData = data
        // Возвращаем фиктивные данные в формате JSON
        resolve({
            json: () => Promise.resolve(mockData)
        });
    });
};

export default mockFetch;