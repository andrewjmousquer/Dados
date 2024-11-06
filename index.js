const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// JSON de exemplo
const data = [
    {
        "id": 161,
        "text": "#MOODENG/USDT Take - Profit\nFUTUROS\nAlvo: 2 ✅ \nLucro: 20,00% 📈 \nPeríodo: 5 minutos",
        "createdAt": "2024-11-06T13:51:00.595Z"
    },
    {
        "id": 160,
        "text": "#MOODENG / USDT 🟢 COMPRA\n\n✅ ENTRADA NA ZONA: 0.18822\n\n⚡️ ALAVANCAGEM ISOLADA: Máx. 20x\n\nAlvos: 4% - 20% - 40% - 60% - 80% - 100% - 120% - 140% - 160% - 180% - 200% -\n\n🚫 STOOPLOSS: 90%",
        "createdAt": "2024-11-06T13:45:48.431Z"
    },
    // Adicione todos os objetos JSON que você forneceu
    {
        "id": 159,
        "text": "#METIS/USDT Take - Profit\nFUTUROS\nAlvo: 1 ✅ \nLucro: 4,20% 📈 \nPeríodo: 2 minutos",
        "createdAt": "2024-11-06T13:05:33.349Z"
    }
    // Continue para todos os outros objetos conforme necessário
];

// Rota para exibir o JSON
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
