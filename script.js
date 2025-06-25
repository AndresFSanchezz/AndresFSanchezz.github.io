function downloadPDF(){
    const element = document.querySelector('.container-lg');
    const opt = {
        margin: 0,
        filename: 'Hoja_de_vida_Andrés_Sánchez.pdf',
        Image: {type: 'jpeg', quality:0.98},
        htmal2canvas: {scale:2, userCors:true},
        jsPDF: {unit: 'mm',format:'letter',orientation:'portrait'},
        pagebreak: {mode: ['css','legact']}
    };
    html2pdf().set(opt).from(element).save();
}