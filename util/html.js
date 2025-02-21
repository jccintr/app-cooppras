//  A COOPERATIVA DE PEQUENOS PRODUTORES RURAIS DE ASSUNÇÃO DO PIAUÍ
// COOPPRAS
export const htmlHeader = () =>{

    const html = `<html>
  <head>
    <style>
       @page {margin-top: 30px;margin-bottom:40px;margin-left:30px;margin-right:30px}
       body { font-family: Arial, sans-serif}
       h1 { text-align: center }
        h3 {background: #f0f0f0;padding:5px}
       h4 {margin-left: 20px;}
       p.label {margin-left:20px;font-weight: bold}
       p span {font-weight: normal}
       .center {text-align: center;}
       table {border:1px solid #b3adad;border-collapse:collapse;padding:5px;margin-left: 40px;}
		table th {border:1px solid #b3adad;padding:5px;background: #f0f0f0;color: #313030;}
		table td {border:1px solid #b3adad;text-align:center;padding:5px;	background: #ffffff;color: #313030;}
        .tdLeft { text-align:left; }
        table tfoot td {border:1px solid #b3adad;padding:5px;background: #f0f0f0;	color: #313030; font-weight: bold;	}
    </style>
   </head>
  <body>
  <h1>Formulário Agropecuário</h1>
  <h2 class="center"">COOPPRASS</h2>`

    return html;
}

export const htmlFooter = () =>{

    const html = `</body>
  </html>`

  return html;
}

export const htmlCooperado = (nome,cpf,telefone) => {

    const html = `<h3>1-DADOS DO COOPERADO</h3>
  <p class="label">Nome: <span>${nome}</span></p>
  <p class="label">CPF: <span>${cpf}</span></p>
  <p class="label">Contato: <span>${telefone}</span></p>
  
    `

    return html;
}

export const htmlDadosPropriedade = (nomeImovelGlobal,areaTotalClobal,regiaoGlobal,distanciaSedeGlobal,coordGeoGlobal,municipioGlobal,cepGlobal,natOcupacaoGlobal,incraGlobal,nirfGlobal) => {
    
        

    const html = `<h3>3-DADOS DA PROPRIEDADE RURAL</h3>
  <p class="label">Nome do Imóvel: <span>${nomeImovelGlobal}</span></p>
  <p class="label">Área Total: <span>${areaTotalClobal}km2</span></p>
  <p class="label">Região: <span>${regiaoGlobal}</span></p>
  <p class="label">Distância da Sede: <span>${distanciaSedeGlobal}km</span></p>
  <p class="label">Coordenadas Geográficas: <span>${coordGeoGlobal}</span></p>
  <p class="label">Município: <span>${municipioGlobal}/PI</span></p>
  <p class="label">CEP: <span>${cepGlobal}</span></p>
  <p class="label">Natureza da Ocupação: <span>${natOcupacaoGlobal}</span></p>
  <p class="label">INCRA No: <span>${incraGlobal}</span></p>
  <p class="label">NIRF No: <span>${nirfGlobal}</span></p>
    `

    return html;
}

export const htmlDetalhesPropriedade = (isCarGlobal,areaTotalConsolidadaGlobal,areaReservaLegalGlobal,areaReconhecidaAppGlobal,
    areaLitigioGlobal,fonteAguaPotavelGlobal,possuiRioGlobal,possuiRepresaGlobal,
    areaRepresaGlobal,possuiFonteEnergiaGlobal,voltagemGlobal,pastagemNativaGlobal,
    pastagemCultivadaGlobal,areaPastagemCultivadaGlobal,cercado1AreaGlobal,cercado1FinalidadeGlobal,
    cercado2AreaGlobal,cercado2FinalidadeGlobal,outrasAreasGlobal,familiasTrabalhandoGlobal,familiasHabitandoGlobal
) => {

    let html = `
  <p class="label">Cadastro Ambiental Rural: <span>${isCarGlobal?'SIM':'NÃO'}</span></p>
  <p class="label">Área Total Consolidada: <span>${areaTotalConsolidadaGlobal}m2</span></p>
  <p class="label">Área de Reserva Legal Proposta: <span>${areaReservaLegalGlobal}m2</span></p>
  <p class="label">Área Reconhecida com APP: <span>${areaReconhecidaAppGlobal}m2</span></p>
  <p class="label">Área de Litígio: <span>${areaLitigioGlobal}m2</span></p>
  <p class="label">Fonte de Água Potável: <span>${fonteAguaPotavelGlobal?'SIM':'NÃO'}</span></p>
  <p class="label">Rio ou Riacho: <span>${possuiRioGlobal?'SIM':'NÃO'}</span></p>`;
  if(possuiRepresaGlobal){
    html += `<p class="label">Tipo de Represa/Açude: <span>SIM</span> Área: <span>${areaRepresaGlobal}m2</span></p>`
  } else {
    html += `<p class="label">Tipo de Represa/Açude: <span>NÃO</span></p>`
  }
  if(possuiFonteEnergiaGlobal){
    html += `<p class="label">Fonte de Energia: <span>SIM</span> Voltagem: <span>${voltagemGlobal}</span></p>`;
  }else {
    html += `<p class="label">Fonte de Energia: <span>NÃO</span></p>`
  }
  html += `
  <p class="label">Pastagem Nativa Predominante: <span>${pastagemNativaGlobal}</span></p>
  <p class="label">Pastagem Cultivada: <span>${pastagemCultivadaGlobal}</span> Área: <span>${areaPastagemCultivadaGlobal}</span></p>
  <p class="label">Cercado 1: <span>${cercado1AreaGlobal}m2</span> Finalidade: <span>${cercado1FinalidadeGlobal}</span></p>
  <p class="label">Cercado 2: <span>${cercado2AreaGlobal}m2</span> Finalidade: <span>${cercado2FinalidadeGlobal}</span></p>
  <p class="label">Outras Áreas Específicas: <span>${outrasAreasGlobal}</span></p>
  <p class="label">Número de Famílias Trabalhando: <span>${familiasTrabalhandoGlobal}</span></p>
  <p class="label">Número de Famílias Habitando: <span>${familiasHabitandoGlobal}</span></p>
  `
  
  

    return html;
}