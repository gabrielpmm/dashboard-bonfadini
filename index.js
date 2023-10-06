let dias_semana=["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
let canc_enc_semresp=["Cancelados","Encerrados","Sem resposta"]
let valor_donut=[7,4,5]
let receita_dia=[2000, 1500, 1327, 2500, 700]
let background_color=['#0F4B8C', '#1C79DE', '#1CD3DE']



var ctx = document.getElementById('chart-atend-dia').getContext('2d')

var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dias_semana,
      datasets: [{
        label: 'Quantidade:',
        data: [12, 19, 7, 5, 2, 3],
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#1C79DE',
      }]
    },
    options: {
      plugins: {
        legend: {
            display: false
        },
    }
  },
    });

var ctx = document.getElementById('canc-enc-sr').getContext('2d')

var pie = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: canc_enc_semresp,
      datasets: [{
        label: 'Quantidade',
        data: valor_donut,
        borderWidth: 1,
        backgroundColor: background_color,
      }]
    },
    options: {
      plugins: {
        legend: {
            display: false
        },
    }
 }
    });

    var ctx = document.getElementById('graphic-receita').getContext('2d')

var pie = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dias_semana,
      datasets: [{
        label: 'Quantidade',
        data: receita_dia,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#1C79DE',
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        legend: {
            display: false
        },
    }
    },
    });
