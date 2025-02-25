
export const htmlPageHeader = (image,page)=> {

  const html = `<header class="header">
        <img src="data:image/jpeg;base64,${image.base64}" alt="Logo Coopprass">
        <h1>COOPERATIVA DE PEQUENOS PRODUTORES RURAIS DE ASSUNÇÃO DO PIAUÍ</h1>
        <span class="page-number">Pág: ${page}</span>
    </header>
  `

  return html;
}
export const htmlTopo = () =>{

    const html = `<html>
  <head>
    <style>
       @page {margin-top: 30px;margin-bottom:40px;margin-left:30px;margin-right:30px}
       body { font-family: Arial, sans-serif}
       .header { display: flex; justify-content: space-between; align-items: center; padding: 10px 20px;border-bottom: 2px solid #000;}
       .header img {height: 50px;}
       .header h1 { flex-grow: 1; text-align: center;font-size: 14px;}
       .page-number {font-size: 14px; font-weight: bold;}
       h1 { text-align: center }
        h3 {background: #f0f0f0;padding:5px}
       h4 {margin-left: 20px;}
       p.label {margin-left:20px;font-weight: bold}
       p span {font-weight: normal}
       span {margin-left: 20px;}
       .center {text-align: center;}
       table {border:1px solid #b3adad;border-collapse:collapse;padding:5px;margin-left: 40px;}
	   	table th {border:1px solid #b3adad;padding:5px;background: #f0f0f0;color: #313030;}
	  	table td {border:1px solid #b3adad;text-align:center;padding:5px;	background: #ffffff;color: #313030;}
        .tdLeft { text-align:left; }
        table tfoot td {border:1px solid #b3adad;padding:5px;background: #f0f0f0;	color: #313030; font-weight: bold;	}
    </style>
   </head>
  <body>
  `
 
    return html;
}

export const htmlDocTitle = () => {

  const html = ` <h1>Formulário Agropecuário</h1>`

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
  <p class="label">Área Total: <span>${areaTotalClobal} m<sup>2</sup></span></p>
  <p class="label">Região: <span>${regiaoGlobal}</span></p>
  <p class="label">Distância da Sede: <span>${distanciaSedeGlobal} km</span></p>
  <p class="label">Coordenadas Geográficas: <span>${coordGeoGlobal||'CAMPO NÃO INFORMADO'}</span></p>
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
    areaRepresaGlobal,possuiFonteEnergiaGlobal,voltagemGlobal
) => {

    let html = `
  <p class="label">Cadastro Ambiental Rural: <span>${isCarGlobal?'SIM':'NÃO'}</span></p>
  <p class="label">Área Total Consolidada: <span>${areaTotalConsolidadaGlobal} m<sup>2</sup></span></p>
  <p class="label">Área de Reserva Legal Proposta: <span>${areaReservaLegalGlobal} m<sup>2</sup></span></p>
  <p class="label">Área Reconhecida com APP: <span>${areaReconhecidaAppGlobal} m<sup>2</sup></span></p>
  <p class="label">Área de Litígio: <span>${areaLitigioGlobal} m<sup>2</sup></span></p>
  <p class="label">Fonte de Água Potável: <span>${fonteAguaPotavelGlobal?'SIM':'NÃO'}</span></p>
  <p class="label">Rio ou Riacho: <span>${possuiRioGlobal?'SIM':'NÃO'}</span></p>`;
  if(possuiRepresaGlobal){
    html += `<p class="label">Tipo de Represa/Açude: <span>SIM</span> Área: <span>${areaRepresaGlobal} m<sup>2</sup></span></p>`
  } else {
    html += `<p class="label">Tipo de Represa/Açude: <span>NÃO</span></p>`
  }
  
  if(possuiFonteEnergiaGlobal){
   html += `<p class="label">Fonte de Energia: <span>SIM</span> Voltagem: <span>${voltagemGlobal}</span></p>`;
 }else {
   html += `<p class="label">Fonte de Energia: <span>NÃO</span></p>`
 }
  // fim pagina 1
 
  
  

    return html;
}

export const htmlDetalhesPropriedade2 = (pastagemNativaGlobal, pastagemCultivadaGlobal,areaPastagemCultivadaGlobal,
  cercado1AreaGlobal,cercado1FinalidadeGlobal,cercado2AreaGlobal,cercado2FinalidadeGlobal,outrasAreasGlobal,
  familiasTrabalhandoGlobal,familiasHabitandoGlobal) => {

 
  let html = `
  <p class="label">Pastagem Nativa Predominante: <span>${pastagemNativaGlobal}</span></p>
  <p class="label">Pastagem Cultivada: <span>${pastagemCultivadaGlobal}</span> Área: <span>${areaPastagemCultivadaGlobal} m<sup>2</sup></span></p>
  <p class="label">Cercado 1: <span>${cercado1AreaGlobal}m2</span> Finalidade: <span>${cercado1FinalidadeGlobal}</span></p>
  <p class="label">Cercado 2: <span>${cercado2AreaGlobal}m2</span> Finalidade: <span>${cercado2FinalidadeGlobal}</span></p>
  <p class="label">Outras Áreas Específicas: <span>${outrasAreasGlobal} m<sup>2</sup></span></p>
  <p class="label">Número de Famílias Trabalhando: <span>${familiasTrabalhandoGlobal}</span></p>
  <p class="label">Número de Famílias Habitando: <span>${familiasHabitandoGlobal}</span></p>
  `

   return html
}

export const htmlRebanhoCaprinos = (caprinosGlobal) => {
  const label = ['Matriz','Reprodutor','Em aleitamento','Machos desmamados','Fêmeas desmamadas','Machos > 1 ano'];
  let html = `<h3>3-INFORMAÇÕES AGROPECUÁRIAS</h3>
  <h4>REBANHO DE CAPRINOS</h4>
  <table>
    <thead>
        <tr>
            <th>Descrição</th>
            <th>Quant</th>
            <th>Peso (kg)</th>
            <th>Valor</th>
        </tr>
    </thead>
    <tbody>`;
    let quantTotal = 0, pesoTotal = 0, valorTotal = 0;
    for(let i=0;i<caprinosGlobal.length;i++){
      quantTotal += parseInt(caprinosGlobal[i].quant);
      pesoTotal += parseFloat(caprinosGlobal[i].peso);
      valorTotal += parseFloat(caprinosGlobal[i].valor);
      html += `
        <tr>
            <td width="20%" class="tdLeft">${label[i]}</td>
            <td width="20%">${caprinosGlobal[i].quant}</td>
            <td width="20%">${caprinosGlobal[i].peso}</td>
            <td width="20%">${parseFloat(caprinosGlobal[i].valor).toFixed(2)}</td>
        </tr>
      `
    }
       
   html +=`
        <tfoot>
            <tr>
              <td>Totais:</td>
              <td>${quantTotal}</td>
              <td>${pesoTotal}</td>
              <td>${valorTotal.toFixed(2)}</td>
            </tr>
        </tfoot>
    </tbody>
   
</table>
  `

  return html;
}

export const htmlRebanhoOvinos = (ovinosGlobal) => {
  const label = ['Matriz','Reprodutor','Em aleitamento','Machos desmamados','Fêmeas desmamadas','Machos > 1 ano'];
  let html = `<h4>REBANHO DE DE OVINOS</h4>
  <table>
    <thead>
        <tr>
            <th>Descrição</th>
            <th>Quant</th>
            <th>Peso (kg)</th>
            <th>Valor</th>
        </tr>
    </thead>
    <tbody>`;
    let quantTotal = 0, pesoTotal = 0, valorTotal = 0;
    for(let i=0;i<ovinosGlobal.length;i++){
      quantTotal += parseInt(ovinosGlobal[i].quant);
      pesoTotal += parseFloat(ovinosGlobal[i].peso);
      valorTotal += parseFloat(ovinosGlobal[i].valor);
      html += `
        <tr>
            <td width="20%" class="tdLeft">${label[i]}</td>
            <td width="20%">${ovinosGlobal[i].quant}</td>
            <td width="20%">${ovinosGlobal[i].peso}</td>
            <td width="20%">${parseFloat(ovinosGlobal[i].valor).toFixed(2)}</td>
        </tr>
      `
    }
     html +=`<tfoot>
            <tr>
              <td>Totais:</td>
              <td>${quantTotal}</td>
              <td>${pesoTotal}</td>
              <td>${valorTotal.toFixed(2)}</td>
            </tr>
        </tfoot>
    </tbody>
   
</table>
<p></p>

  `

  return html;
}

export const htmlBoletimProdudaoAnual = (producaoAnualGlobal) => {
  const label = ['Média de natalidade','Média de mortalidade','Média de Abate','Média de roubo ou furto','Mortalidade por acidente ou predador','Mortalidade por intoxicação natural'];
  let html = `
   <h4>BOLETIM DE PRODUÇÃO ANUAL</h4>
    <table>
    <thead>
        <tr>
            <th>Descrição</th>
            <th>Quant</th>
            <th>Peso (kg)</th>
            <th>Valor</th>
        </tr>
    </thead>
    <tbody>`
    let quantTotal = 0, pesoTotal = 0, valorTotal = 0;
    for(let i=0;i<producaoAnualGlobal.length;i++){
      quantTotal += parseInt(producaoAnualGlobal[i].quant);
      pesoTotal += parseFloat(producaoAnualGlobal[i].peso);
      valorTotal += parseFloat(producaoAnualGlobal[i].valor);
      html += `
        <tr>
            <td width="20%" class="tdLeft">${label[i]}</td>
            <td width="20%">${producaoAnualGlobal[i].quant}</td>
            <td width="20%">${producaoAnualGlobal[i].peso}</td>
            <td width="20%">${parseFloat(producaoAnualGlobal[i].valor).toFixed(2)}</td>
        </tr>
      `
    }
    html +=`<tfoot>
    <tr>
      <td>Totais:</td>
      <td>${quantTotal}</td>
      <td>${pesoTotal}</td>
      <td>${valorTotal.toFixed(2)}</td>
    </tr>
</tfoot>
</tbody>

</table>

`

  return html;
}

export const htmlDemaisProducao = (demaisProducaoGlobal) => {
  const label = ['Bovinos','Suinos','Aves','Piscicultura','Apicultura (Apiário / Enxames)','Apicultura (Produção de mel)'];
  let html = `
   <h4>DEMAIS PRODUÇÃO AGROPECUÁRIA</h4>
    <table>
    <thead>
        <tr>
            <th>Descrição</th>
            <th>Quant</th>
            <th>Peso (kg)</th>
            <th>Valor</th>
        </tr>
    </thead>
    <tbody>`
    let quantTotal = 0, pesoTotal = 0, valorTotal = 0;
    for(let i=0;i<demaisProducaoGlobal.length;i++){
      quantTotal += parseInt(demaisProducaoGlobal[i].quant);
      pesoTotal += parseFloat(demaisProducaoGlobal[i].peso);
      valorTotal += parseFloat(demaisProducaoGlobal[i].valor);
      html += `
        <tr>
            <td width="20%" class="tdLeft">${label[i]}</td>
            <td width="20%">${demaisProducaoGlobal[i].quant}</td>
            <td width="20%">${demaisProducaoGlobal[i].peso}</td>
            <td width="20%">${parseFloat(demaisProducaoGlobal[i].valor).toFixed(2)}</td>
        </tr>
      `
    }
    html +=`<tfoot>
    <tr>
      <td>Totais:</td>
      <td>${quantTotal}</td>
      <td>${pesoTotal}</td>
      <td>${valorTotal.toFixed(2)}</td>
    </tr>
</tfoot>
</tbody>

</table>

`

  return html;
}

export const htmlDoencas = (doencas) => {
 
  let html = `<h4>OCORRÊNCIA DE DOENÇAS</h4>
  <table>
    <thead>
        <tr>
            <th>Tipo</th>
            <th>Período</th>
            <th>Tratamento</th>
            <th>Medicação</th>
        </tr>
    </thead>
    <tbody>`;
    
    for(let i=0;i<doencas.length;i++){
      html += `
        <tr>
            <td width="20%" class="tdLeft">${doencas[i].tipo}</td>
            <td width="20%" class="tdLeft">${doencas[i].periodo}</td>
            <td width="20%" class="tdLeft">${doencas[i].tratamento}</td>
            <td width="20%" class="tdLeft">${doencas[i].medicacao}</td>
            
        </tr>
      `
    }
     html +=`
    </tbody>
   
</table>
<p></p>

  `

  return html;
}

export const htmlInsumos = (insumos) => {
 
  let html = `<h4>USO DE INSUMOS, SILAGEM E FERTILIZANTES</h4>
  <table>
    <thead>
        <tr>
            <th>Tipo</th>
            <th>Período</th>
            <th>Quantidade (kg)</th>
            <th>Resultado</th>
        </tr>
    </thead>
    <tbody>`;
    
    for(let i=0;i<insumos.length;i++){
      html += `
        <tr>
            <td width="20%" class="tdLeft">${insumos[i].tipo}</td>
            <td width="20%" class="tdLeft">${insumos[i].periodo}</td>
            <td width="20%" class="tdLeft">${insumos[i].quant}</td>
            <td width="20%" class="tdLeft">${insumos[i].resultado}</td>
            
        </tr>
      `
    }
     html +=`
    </tbody>
   
</table>
<p></p>

  `

  return html;
}

export const htmlLocal = (data,local,tecnico,anotacoes) => {

  const html = `
<p class="label">Data da Visita: <span>${data}</span></p>
<p class="label">Local da Visita: <span>${local}</span></p>
<p class="label">Responsável Técnico: <span>${tecnico}</span></p>
<p class="label">Anotações:</p>
<span>${anotacoes}</span>

  `

  return html;
}