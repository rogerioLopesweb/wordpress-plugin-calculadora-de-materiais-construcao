(function($) {
    $(document).ready(function() {
     //$("input.number-mask").mask('###00.0', { reverse: true });
        if($("#frm-area-parede").length > 0 )
        {
            $("#btn-area-parede").click(function(){
                var comprimento = $('#area-parede-comprimento').val() || '';
                var altura = $('#area-parede-altura').val() || '';
                var resultado = 0;
                if(comprimento.trim() == "")
                {
                    $('#area-parede-comprimento').addClass("is-invalid");
                    document.getElementById("area-parede-comprimento").focus();
                    return false;
                }else{
                    $('#area-parede-comprimento').removeClass("is-invalid");
                    $('#area-parede-comprimento').addClass("is-valid");
                }
                if(altura.trim() == "")
                {
                    $('#area-parede-altura').addClass("is-invalid");
                    document.getElementById("area-parede-altura").focus();
                    return false;
                }else{
                    $('#area-parede-altura').removeClass("is-invalid");
                    $('#area-parede-altura').addClass("is-valid");
                }
                resultado = (comprimento * altura);
                $('#bloco-area-parede-resultado').removeClass("inputHidden");
                $('#bloco-area-parede-resultado').addClass("inputShow");
                $("#area-parede-resultado").html("<h3>Resultado</h3><p><b>" + resultado + "m² de área</b></p>");
                /*$('#divCarregando').show();
                 $('#divCarregando').hide();*/
                //monta json para o ajax
            })
        }
         /*----------------------------------------------*/
        if($("#frm-vigapilar-volume-concreto").length > 0 )
        {
            $("#btn-vigapilar").click(function(){
                var altura = $('#vigapilar-altura').val() || '';
                var base = $('#vigapilar-base').val() || '';
                var comprimento = $('#vigapilar-comprimento').val() || '';
                var resultado = 0;
                if(altura.trim() == "")
                {
                    $('#vigapilar-altura').addClass("is-invalid");
                    document.getElementById("vigapilar-altura").focus();
                    return false;
                }else{
                    $('#vigapilar-altura').removeClass("is-invalid");
                    $('#vigapilar-altura').addClass("is-valid");
                }
                 if(base.trim() == "")
                {
                    $('#vigapilar-base').addClass("is-invalid");
                    document.getElementById("vigapilar-base").focus();
                    return false;
                }else{
                    $('#vigapilar-base').removeClass("is-invalid");
                    $('#vigapilar-base').addClass("is-valid");
                }
                if(comprimento.trim() == "")
                {
                    $('#vigapilar-comprimento').addClass("is-invalid");
                    document.getElementById("vigapilar-comprimento").focus();
                    return false;
                }else{
                    $('#vigapilar-comprimento').removeClass("is-invalid");
                    $('#vigapilar-comprimento').addClass("is-valid");
                }
                resultado = (altura/100)*(base/100)*comprimento;
                //$("#vigapilar-resultado").html("<p>Resultado: Volume de Concreto " + resultado + "m³</p>");
                $('#bloco-vigapilar-resultado').removeClass("inputHidden");
                $('#bloco-vigapilar-resultado').addClass("inputShow");
                $("#vigapilar-resultado").html("<h3>Resultado</h3><p><b>" + resultado + "m³ de volume de concreto</b></p>");
                /*$('#divCarregando').show();
                 $('#divCarregando').hide();*/
                //monta json para o ajax
            })
        }
         /*----------------------------------------------*/
        if($("#frm-volume-laje").length > 0 )
        {
            $("#btn-volume-laje").click(function(){
                var altura = $('#volume-laje-altura').val() || '';
                var comprimento = $('#volume-laje-comprimento').val() || '';
                var espessura = $('#volume-laje-espessura').val() || '';
                var resultado = 0;
                if(altura.trim() == "")
                {
                    $('#volume-laje-altura').addClass("is-invalid");
                    document.getElementById("volume-laje-altura").focus();
                    return false;
                }else{
                    $('#volume-laje-altura').removeClass("is-invalid");
                    $('#volume-laje-altura').addClass("is-valid");
                }
                if(comprimento.trim() == "")
                {
                    $('#volume-laje-comprimento').addClass("is-invalid");
                    document.getElementById("volume-laje-comprimento").focus();
                    return false;
                }else{
                    $('#volume-laje-comprimento').removeClass("is-invalid");
                    $('#volume-laje-comprimento').addClass("is-valid");
                }
                if(espessura.trim() == "")
                {
                    $('#volume-laje-base').addClass("is-invalid");
                    document.getElementById("volume-laje-espessura").focus();
                    return false;
                }else{
                    $('#volume-laje-espessura').removeClass("is-invalid");
                    $('#volume-laje-espessura').addClass("is-valid");
                }
                resultado = comprimento*altura*(espessura/100);
                //$("#volume-laje-resultado").html("<p>Resultado: Volume de Concreto " + resultado + "m³</p>");
                 $('#bloco-volume-laje-resultado').removeClass("inputHidden");
                $('#bloco-volume-laje-resultado').addClass("inputShow");
                $("#volume-laje-resultado").html("<h3>Resultado</h3><p><b>" + resultado + "m³ de volume de concreto</b></p>");
                /*$('#divCarregando').show();
                 $('#divCarregando').hide();*/
                //monta json para o ajax
            })
        }
         /*----------------------------------------------*/
        if($("#frm-calculadora-materiais").length > 0 )
        {
			calculadoraMostrarEsconderCampos();
            calculadoraMostrarEsconderImagens();
			$("#btn-materiais").click(function(){
				calculadoraValidarCampos();
			})
			$("#materiais-finalidade").change(function(){
				calculadoraMostrarEsconderCampos();
                calculadoraMostrarEsconderImagens();
				$('#materiais-resultado-geral').removeClass("inputShow");
				$('#materiais-resultado-geral').addClass("inputHidden");
				$('#materiais-largura').val('');
				$('#materiais-comprimento').val('');
				$('#materiais-area').val('');
				$('#materiais-espessura').val('');
				$('#materiais-profundidade').val('');
				$('#materiais-secao-altura').val('');
				$('#materiais-secao-base').val('');
				$('#materiais-secao-diametro').val('');
			})
        };

        function calculadoraMostrarEsconderImagens(){
            var finalidade = $('#materiais-finalidade').val() || '';
            
            if(finalidade == "assentamento"){
                $('#img-assentamento').show();
            }else{
                $('#img-assentamento').hide();
            };
            if(finalidade == "chapisco" || finalidade == "reboco"){
                $('#img-chapisco').show();
            }else{
                $('#img-chapisco').hide();
            };
            if(finalidade == "concreto_magro" || finalidade == "contrapiso" || finalidade == "laje"){
                $('#img-concreto-magro').show();
            }else{
                $('#img-concreto-magro').hide();
            };
            if(finalidade == "fundacao"){
                $('#img-fundacao').show();
            }else{
                $('#img-fundacao').hide();
            };
            if(finalidade == "pilar"){
                $('#img-pilar').show();
            }else{
                $('#img-pilar').hide();
            };
            if(finalidade == "pilar_cilindrico"){
                $('#img-pilar-cilindrico').show();
            }else{
                $('#img-pilar-cilindrico').hide();
            };
            if(finalidade == "viga"){
                $('#img-viga').show();
            }else{
                $('#img-viga').hide();
            };
            if(finalidade == "viga_cilindrica"){
                $('#img-viga-cilindrica').show();
            }else{
                $('#img-viga-cilindrica').hide();
            };
            
        };

        function calculadoraMostrarEsconderCampos()
        {
                var finalidade = $('#materiais-finalidade').val() || '';
                //var altura = $('#materiais-altura').val() || '';
                var comprimento = $('#materiais-comprimento').val() || '';
                //var volume = $('#materiais-volume').val() || '';
                //var area = $('#materiais-area').val() || '';
                var espessura = $('#materiais-espessura').val() || '';
                var profundidade = $('#materiais-profundidade').val() || '';
                var secaoAltura = $('#materiais-secao-altura').val() || '';
                var secaoBase = $('#materiais-secao-base').val() || '';
                var secaoDiametro = $('#materiais-secao-diametro').val() || '';
                var resultado = 0;
                $('#materiais-resultado-geral').addClass("inputHidden");
                if(finalidade == "assentamento" || finalidade == "chapisco" || finalidade == "concreto_magro" || finalidade == "contrapiso" || finalidade == "fundacao" || finalidade == "laje"  || finalidade == "pilar" || finalidade == "pilar_cilindrico" || finalidade == "reboco" || finalidade == "viga" || finalidade == "viga_cilindrica") 
                {
                    $('label[for="materiais-comprimento"]').show();
                    $('#materiais-comprimento-block').addClass("inputShow");
                    $('#materiais-comprimento').addClass("inputShow");
                }else{
                    $('label[for="materiais-comprimento"]').hide();
                    $('#materiais-comprimento-block').addClass("inputHidden");
                    $('#materiais-comprimento').addClass("inputHidden");
                    $('#materiais-comprimento-block').removeClass("inputShow");
                    $('#materiais-comprimento').removeClass("inputShow");
                }
                if(finalidade == "assentamento" || finalidade == "chapisco" || finalidade == "concreto_magro" || finalidade == "contrapiso" || finalidade == "fundacao" || finalidade == "laje" || finalidade == "reboco")
                {
                    $('label[for="materiais-largura"]').show();
                    $('#materiais-largura-block').addClass("inputShow");
                    $('#materiais-largura').addClass("inputShow");
                }else{
                    $('label[for="materiais-largura"]').hide();
                    $('#materiais-largura-block').addClass("inputHidden");
                    $('#materiais-largura').addClass("inputHidden");
                    $('#materiais-largura-block').removeClass("inputShow");
                    $('#materiais-largura').removeClass("inputShow");
                }
                if(finalidade == "fundacao" || finalidade == "concreto_magro")
                {
                    $('label[for="materiais-profundidade"]').show();
                    $('#materiais-profundidade-block').addClass("inputShow");
                    $('#materiais-profundidade').addClass("inputShow");
                }else{
                    $('label[for="materiais-profundidade"]').hide();
                    $('#materiais-profundidade-block').removeClass("inputShow");
                    $('#materiais-profundidade').removeClass("inputShow");
                    $('#materiais-profundidade-block').addClass("inputHidden");
                    $('#materiais-profundidade').addClass("inputHidden");
                }
                if(finalidade == "reboco" || finalidade == "contrapiso" || finalidade == "chapisco" || finalidade == "laje")
                 {
                    $('label[for="materiais-espessura"]').show();
                    $('#materiais-espessura-block').addClass("inputShow");
                    $('#materiais-espessura').addClass("inputShow");
                }else{
                    $('label[for="materiais-espessura"]').hide();
                    $('#materiais-espessura-block').removeClass("inputShow");
                    $('#materiais-espessura').removeClass("inputShow");
                    $('#materiais-espessura-block').addClass("inputHidden");
                    $('#materiais-espessura').addClass("inputHidden");
                }
                if(finalidade == "pilar" || finalidade == "viga")
                {
                    $('label[for="materiais-secao-altura"]').show();
                    $('#materiais-secao-altura-block').addClass("inputShow");
                    $('#materiais-secao-altura').addClass("inputShow");
                }else{
                    $('label[for="materiais-secao-altura"]').hide();
                    $('#materiais-secao-altura-block').removeClass("inputShow");
                    $('#materiais-secao-altura').removeClass("inputShow");
                    $('#materiais-secao-altura-block').addClass("inputHidden");
                    $('#materiais-secao-altura').addClass("inputHidden");
                }
                if(finalidade == "pilar" || finalidade == "viga")
                {
                    $('label[for="materiais-secao-base"]').show();
                    $('#materiais-secao-base-block').addClass("inputShow");
                    $('#materiais-secao-base').addClass("inputShow");
                }else{
                    $('label[for="materiais-secao-base"]').hide();
                    $('#materiais-secao-base-block').removeClass("inputShow");
                    $('#materiais-secao-base').removeClass("inputShow");
                    $('#materiais-secao-base-block').addClass("inputHidden");
                    $('#materiais-secao-base').addClass("inputHidden");
                }
                if(finalidade == "pilar_cilindrico" || finalidade == "viga_cilindrica")
                {
                    $('label[for="materiais-secao-diametro"]').show();
                    $('#materiais-secao-diametro-block').addClass("inputShow");
                    $('#materiais-secao-diametro').addClass("inputShow");
                }else{
                    $('label[for="materiais-secao-diametro"]').hide();
                    $('#materiais-secao-diametro-block').removeClass("inputShow");
                    $('#materiais-secao-diametro').removeClass("inputShow");
                    $('#materiais-secao-diametro-block').addClass("inputHidden");
                    $('#materiais-secao-diametro').addClass("inputHidden");
                }
                if(finalidade == "assentamento")
                {
                    $('#tracos-rendimentos-assentamento-block').addClass("inputShow");
                    $('#tracos-rendimentos-assentamento').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-assentamento-block').removeClass("inputShow");
                    $('#tracos-rendimentos-assentamento').removeClass("inputShow");
                    $('#tracos-rendimentos-assentamento-block').addClass("inputHidden");
                    $('#tracos-rendimentos-assentamento').addClass("inputHidden");
                }
                if(finalidade == "contrapiso")
                {
                    $('#tracos-rendimentos-contrapiso-block').addClass("inputShow");
                    $('#tracos-rendimentos-contrapiso').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-contrapiso-block').removeClass("inputShow");
                    $('#tracos-rendimentos-contrapiso').removeClass("inputShow");
                    $('#tracos-rendimentos-contrapiso-block').addClass("inputHidden");
                    $('#tracos-rendimentos-contrapiso').addClass("inputHidden");
                }
                if(finalidade == "chapisco")
                {
                    $('#tracos-rendimentos-chapisco-block').addClass("inputShow");
                    $('#tracos-rendimentos-chapisco').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-chapisco-block').removeClass("inputShow");
                    $('#tracos-rendimentos-chapisco').removeClass("inputShow");
                    $('#tracos-rendimentos-chapisco-block').addClass("inputHidden");
                    $('#tracos-rendimentos-chapisco').addClass("inputHidden");
                }
                if(finalidade == "concreto_magro")
                {
                    $('#tracos-rendimentos-concreto-magro-block').addClass("inputShow");
                    $('#tracos-rendimentos-concreto-magro').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-concreto-magro-block').removeClass("inputShow");
                    $('#tracos-rendimentos-concreto-magro').removeClass("inputShow");
                    $('#tracos-rendimentos-concreto-magro-block').addClass("inputHidden");
                    $('#tracos-rendimentos-concreto-magro').addClass("inputHidden");
                }
                 if(finalidade == "fundacao")
                {
                    $('#tracos-rendimentos-fundacao-block').addClass("inputShow");
                    $('#tracos-rendimentos-fundacao').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-fundacao-block').removeClass("inputShow");
                    $('#tracos-rendimentos-fundacao').removeClass("inputShow");
                    $('#tracos-rendimentos-fundacao-block').addClass("inputHidden");
                    $('#tracos-rendimentos-fundacao').addClass("inputHidden");
                }
                if(finalidade == "laje")
                {
                    $('#tracos-rendimentos-laje-block').addClass("inputShow");
                    $('#tracos-rendimentos-laje').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-laje-block').removeClass("inputShow");
                    $('#tracos-rendimentos-laje').removeClass("inputShow");
                    $('#tracos-rendimentos-laje-block').addClass("inputHidden");
                    $('#tracos-rendimentos-laje').addClass("inputHidden");
                }
                if(finalidade == "pilar")
                {
                    $('#tracos-rendimentos-pilar-block').addClass("inputShow");
                    $('#tracos-rendimentos-pilar').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-pilar-block').removeClass("inputShow");
                    $('#tracos-rendimentos-pilar').removeClass("inputShow");
                    $('#tracos-rendimentos-pilar-block').addClass("inputHidden");
                    $('#tracos-rendimentos-pilar').addClass("inputHidden");
                }
                if(finalidade == "pilar_cilindrico")
                {
                    $('#tracos-rendimentos-pilar-cilindrico-block').addClass("inputShow");
                    $('#tracos-rendimentos-pilar-cilindrico').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-pilar-cilindrico-block').removeClass("inputShow");
                    $('#tracos-rendimentos-pilar-cilindrico').removeClass("inputShow");
                    $('#tracos-rendimentos-pilar-cilindrico-block').addClass("inputHidden");
                    $('#tracos-rendimentos-pilar-cilindrico').addClass("inputHidden");
                }
                if(finalidade == "reboco")
                {
                    $('#tracos-rendimentos-reboco-block').addClass("inputShow");
                    $('#tracos-rendimentos-reboco').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-reboco-block').removeClass("inputShow");
                    $('#tracos-rendimentos-reboco').removeClass("inputShow");
                    $('#tracos-rendimentos-reboco-block').addClass("inputHidden");
                    $('#tracos-rendimentos-reboco').addClass("inputHidden");
                }
                if(finalidade == "viga")
                {
                    $('#tracos-rendimentos-viga-block').addClass("inputShow");
                    $('#tracos-rendimentos-viga').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-viga-block').removeClass("inputShow");
                    $('#tracos-rendimentos-viga').removeClass("inputShow");
                    $('#tracos-rendimentos-viga-block').addClass("inputHidden");
                    $('#tracos-rendimentos-viga').addClass("inputHidden");
                }
                if(finalidade == "viga_cilindrica")
                {
                    $('#tracos-rendimentos-viga-cilindrica-block').addClass("inputShow");
                    $('#tracos-rendimentos-viga-cilindrica').addClass("inputShow");
                }else{
                    $('#tracos-rendimentos-viga-cilindrica-block').removeClass("inputShow");
                    $('#tracos-rendimentos-viga-cilindrica').removeClass("inputShow");
                    $('#tracos-rendimentos-viga-cilindrica-block').addClass("inputHidden");
                    $('#tracos-rendimentos-viga-cilindrica').addClass("inputHidden");
                }
        }
        function calculadoraValidarCampos()
        {
                var finalidade = $('#materiais-finalidade').val() || '';
                var comprimento = $('#materiais-comprimento').val() || '';
                //var altura = $('#materiais-altura').val() || '';
                var largura = $('#materiais-largura').val() || '';
                //var volume = $('#materiais-volume').val() || '';
                var area = $('#materiais-area').val() || '';
                var espessura = $('#materiais-espessura').val() || '';
                var profundidade = $('#materiais-profundidade').val() || '';
                var secaoAltura = $('#materiais-secao-altura').val() || '';
                var secaoBase = $('#materiais-secao-base').val() || '';
                var secaoDiametro = $('#materiais-secao-diametro').val() || '';
                var resultado = 0;
                if(finalidade.trim() == "")
                {
                    $('#materiais-finalidade').addClass("is-invalid");
                    document.getElementById("materiais-finalidade").focus();
                    return false;
                }else{
                    $('#materiais-finalidade').removeClass("is-invalid");
                    $('#materiais-finalidade').addClass("is-valid");
                }
                if((finalidade == "assentamento" || finalidade == "chapisco" || finalidade == "concreto_magro" || finalidade == "contrapiso" || finalidade == "fundacao" || finalidade == "laje" || finalidade == "pilar" || finalidade == "pilar_cilindrico" || finalidade == "reboco" || finalidade == "viga" || finalidade == "viga_cilindrica") && comprimento == "")
                {
                    $('#materiais-comprimento').addClass("is-invalid");
                    document.getElementById("materiais-comprimento").focus();
                    return false;
                }else{
                    $('#materiais-comprimento').removeClass("is-invalid");
                    $('#materiais-comprimento').addClass("is-valid");
                }
                if((finalidade == "assentamento" || finalidade == "chapisco" || finalidade == "concreto_magro" || finalidade == "contrapiso" || finalidade == "fundacao" || finalidade == "laje" || finalidade == "reboco") && largura == "")
                {
                    $('#materiais-largura').addClass("is-invalid");
                    document.getElementById("materiais-largura").focus();
                    return false;
                }else{
                    $('#materiais-largura').removeClass("is-invalid");
                    $('#materiais-largura').addClass("is-valid");
                }
                if((finalidade == "concreto_magro" ||  finalidade == "fundacao" ) && profundidade == "")
                {
                    $('#materiais-profundidade').addClass("is-invalid");
                    document.getElementById("materiais-profundidade").focus();
                    return false;
                }else{
                    $('#materiais-profundidade').removeClass("is-invalid");
                    $('#materiais-profundidade').addClass("is-valid");
                }
                if((finalidade == "pilar" || finalidade == "viga") && secaoAltura == "")
                 {
                    $('#materiais-secao-altura').addClass("is-invalid");
                    document.getElementById("materiais-secao-altura").focus();
                    return false;
                }else{
                    $('#materiais-secao-altura').removeClass("is-invalid");
                    $('#materiais-secao-altura').addClass("is-valid");
                }
                if((finalidade == "pilar" || finalidade == "viga") && secaoBase == "")
                 {
                    $('#materiais-secao-base').addClass("is-invalid");
                    document.getElementById("materiais-secao-base").focus();
                    return false;
                }else{
                    $('#materiais-secao-base').removeClass("is-invalid");
                    $('#materiais-secao-base').addClass("is-valid");
                }
                if(( finalidade == "chapisco" || finalidade == "contrapiso" || finalidade == "laje" || finalidade == "reboco" ) && espessura == "")
                {
                    $('#materiais-espessura').addClass("is-invalid");
                    document.getElementById("materiais-espessura").focus();
                    return false;
                }else{
                    $('#materiais-espessura').removeClass("is-invalid");
                    $('#materiais-espessura').addClass("is-valid");
                }
                if(( finalidade == "pilar_cilindrico" || finalidade == "viga_cilindrica") && secaoDiametro == "")
                {
                    $('#materiais-secao-diametro').addClass("is-invalid");
                    document.getElementById("materiais-secao-diametro").focus();
                    return false;
                }else{
                    $('#materiais-secao-diametro').removeClass("is-invalid");
                    $('#materiais-secao-diametro').addClass("is-valid");
                }
                calcularMateriais();
        }
        function calcularMateriais()
        {
            var finalidade = $('#materiais-finalidade').val() || '';
            //var altura = $('#materiais-altura').val() || '';
            var largura = $('#materiais-largura').val() || '';
            var comprimento = $('#materiais-comprimento').val() || '';
            //var volume = $('#materiais-volume').val() || ''; //I7
            var area = $('#materiais-area').val() || '';
            var espessura = $('#materiais-espessura').val() || '';
            var profundidade = $('#materiais-profundidade').val() || '';
            var secaoAltura = $('#materiais-secao-altura').val() || '';
            var secaoBase = $('#materiais-secao-base').val() || '';
            var secaoDiametro = $('#materiais-secao-diametro').val() || '';
           // Variaveis Tebela de Refencia - Traços e Rendimento
            var referenciaQtd = 0;
            var tracoRencimentoCimento50kl = 0; //I10
            var tracoRencimentoCimentoLata18L = 0; //I11
            var tracoRencimentoAreiaLata18L = 0; //I12
            var tracoRencimentoBritaLata18L = 0; //I13
            var tracoRencimentoCalLata18L = 0; //I14
            var tracoRencimentoAguaLata18L = 0; //I15
            var redimentoTraco = 0; //I16
            //Variaveis  Resultado intermediario
            var resIntermeiarioCimento = 0;
            var resIntermeiarioAreia = 0;
            var resIntermeiarioBrita =0;
            var resIntermeiarioCal = 0;
            // Variaveis Resultado final
            var resFinalCimento50k = 0;
            var resFinalCimento40k = 0;
            var resFinalAreia = 0;
            var resFinalBrita = 0;
            var resFinalCal = 0;
            //Calcula material para assentamento
            if(finalidade.trim() == "assentamento")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 0; //I10
                tracoRencimentoCimentoLata18L = 1; //I11
                tracoRencimentoAreiaLata18L = 8; //I12
                tracoRencimentoBritaLata18L = 0; //I13
                tracoRencimentoCalLata18L = 2; //I14
                tracoRencimentoAguaLata18L = 0; //I15
                redimentoTraco = 7.272727273; //I16
                //calcula a area
                area = (comprimento * largura);
                //Calcula cimento
                resIntermeiarioCimento = (((area/redimentoTraco)*tracoRencimentoCimento50kl*50)+((area/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*referenciaQtd;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((area/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*referenciaQtd;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = 0;
                resFinalBrita  = 0;
                //Cal é zero para viga
                resIntermeiarioCal = (((area/redimentoTraco)*tracoRencimentoCalLata18L*12))*referenciaQtd;
                resFinalCal = Math.ceil(resIntermeiarioCal/20);
            }
            //Calcula material para chapisco
            if(finalidade.trim() == "chapisco")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 0; //I10
                tracoRencimentoCimentoLata18L = 1; //I11
                tracoRencimentoAreiaLata18L = 3; //I12
                tracoRencimentoBritaLata18L = 0; //I13
                tracoRencimentoCalLata18L = 0; //I14
                tracoRencimentoAguaLata18L = 0; //I15
                redimentoTraco = 13.63636364; //I16
                //calcula a area
                area = (comprimento * largura);
                //Calcula cimento
                resIntermeiarioCimento = (((area/redimentoTraco)*tracoRencimentoCimento50kl*50)+((area/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*espessura;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((area/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*espessura;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = 0;
                resFinalBrita  = 0;
                //Calcula  cal
                resIntermeiarioCal = 0;
                resFinalCal =  0;
            }
            //Calcula material para concreto_magro
            if(finalidade.trim() == "concreto_magro")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 1; //I10
                tracoRencimentoCimentoLata18L = 0; //I11
                tracoRencimentoAreiaLata18L = 8.5; //I12
                tracoRencimentoBritaLata18L = 11.5; //I13
                tracoRencimentoCalLata18L = 0; //I14
                tracoRencimentoAguaLata18L = 2; //I15
                redimentoTraco = 0.25; //I16
                //cacula volume m³ cubico
                volume = comprimento*largura*(profundidade/100);
                //Calcula cimento
                resIntermeiarioCimento = (((volume/redimentoTraco)*tracoRencimentoCimento50kl*50)+((volume/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*referenciaQtd;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((volume/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*referenciaQtd;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = (((volume/redimentoTraco)*tracoRencimentoBritaLata18L*18)/1000)*referenciaQtd;
                resFinalBrita  = Math.ceil(resIntermeiarioBrita);
                //Calcula  cal
                resIntermeiarioCal = 0;
                resFinalCal = 0;
            }
            //Calcula material para contrapiso
            if(finalidade.trim() == "contrapiso")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 0; //I10
                tracoRencimentoCimentoLata18L = 1; //I11
                tracoRencimentoAreiaLata18L = 3; //I12
                tracoRencimentoBritaLata18L = 0; //I13
                tracoRencimentoCalLata18L = 0; //I14
                tracoRencimentoAguaLata18L = 0; //I15
                redimentoTraco = 4.545454545; //I16
                 //calcula a area
                area = (comprimento * largura);
                //Calcula cimento
                resIntermeiarioCimento = (((area/redimentoTraco)*tracoRencimentoCimento50kl*50)+((area/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*espessura;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((area/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*espessura;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = 0;
                resFinalBrita  = 0;
                //Calcula  cal
                resIntermeiarioCal = 0;
                resFinalCal =  0;
            }
            //Calcula material para fundacao
            if(finalidade.trim() == "fundacao")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 1; //I10
                tracoRencimentoCimentoLata18L = 0; //I11
                tracoRencimentoAreiaLata18L = 5; //I12
                tracoRencimentoBritaLata18L = 6.5; //I13
                tracoRencimentoCalLata18L = 0; //I14
                tracoRencimentoAguaLata18L = 1.5; //I15
                redimentoTraco = 0.16; //I16
                //cacula volume m³ cubico
                volume = comprimento*largura*(profundidade/100);
                //Calcula cimento
                resIntermeiarioCimento = (((volume/redimentoTraco)*tracoRencimentoCimento50kl*50)+((volume/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*referenciaQtd;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((volume/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*referenciaQtd;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = (((volume/redimentoTraco)*tracoRencimentoBritaLata18L*18)/1000)*referenciaQtd;
                resFinalBrita  = Math.ceil(resIntermeiarioBrita);
                //Calcula  cal
                resIntermeiarioCal = 0;
                resFinalCal = 0;
            }
            //Calcula material para laje
            if(finalidade.trim() == "laje")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 1; //I10
                tracoRencimentoCimentoLata18L = 0; //I11
                tracoRencimentoAreiaLata18L = 4; //I12
                tracoRencimentoBritaLata18L = 5.5; //I13
                tracoRencimentoCalLata18L = 0; //I14
                tracoRencimentoAguaLata18L = 1.25; //I15
                redimentoTraco = 0.14; //I16
                //cacula volume m³ cubico
                volume = comprimento*largura*(espessura/100);
                //Calcula cimento
                resIntermeiarioCimento = (((volume/redimentoTraco)*tracoRencimentoCimento50kl*50)+((volume/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*referenciaQtd;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((volume/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*referenciaQtd;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = (((volume/redimentoTraco)*tracoRencimentoBritaLata18L*18)/1000)*referenciaQtd;
                resFinalBrita  = Math.ceil(resIntermeiarioBrita);
                //Calcula  cal
                resIntermeiarioCal = 0;
                resFinalCal = 0;
            }
             //Calcula material para pilar
            if(finalidade.trim() == "pilar")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 1; //I10
                tracoRencimentoCimentoLata18L = 0; //I11
                tracoRencimentoAreiaLata18L = 4; //I12
                tracoRencimentoBritaLata18L = 5.5; //I13
                tracoRencimentoCalLata18L = 0; //I14
                tracoRencimentoAguaLata18L = 1.25; //I15
                redimentoTraco = 0.14; //I16
                 //cacula volume m³ cubico
                volume = (secaoAltura/100)*(secaoBase/100)*comprimento;
                //Calcula cimento
                resIntermeiarioCimento = (((volume/redimentoTraco)*tracoRencimentoCimento50kl*50)+((volume/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*referenciaQtd;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((volume/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*referenciaQtd;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = (((volume/redimentoTraco)*tracoRencimentoBritaLata18L*18)/1000)*referenciaQtd;
                resFinalBrita  = Math.ceil(resIntermeiarioBrita);
                //Cal é zero para viga
                resIntermeiarioCal = 0;
                resFinalCal = 0;
            }
             //Calcula material para pilar cilindrico
            if(finalidade.trim() == "pilar_cilindrico")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 1; //I10
                tracoRencimentoCimentoLata18L = 0; //I11
                tracoRencimentoAreiaLata18L = 4; //I12
                tracoRencimentoBritaLata18L = 5.5; //I13
                tracoRencimentoCalLata18L = 0; //I14
                tracoRencimentoAguaLata18L = 1.25; //I15
                redimentoTraco = 0.14; //I16
                 //cacula volume m³ cubico
                volume = ((3.14*(secaoDiametro/100)*(secaoDiametro/100))/4)*comprimento;
                //Calcula cimento
                resIntermeiarioCimento = (((volume/redimentoTraco)*tracoRencimentoCimento50kl*50)+((volume/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*referenciaQtd;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((volume/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*referenciaQtd;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = (((volume/redimentoTraco)*tracoRencimentoBritaLata18L*18)/1000)*referenciaQtd;
                resFinalBrita  = Math.ceil(resIntermeiarioBrita);
                //Cal é zero para viga
                resIntermeiarioCal = 0;
                resFinalCal = 0;
            }
            //Calcula material para reboco
            if(finalidade.trim() == "reboco")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 0; //I10
                tracoRencimentoCimentoLata18L = 1; //I11
                tracoRencimentoAreiaLata18L = 9; //I12
                tracoRencimentoBritaLata18L = 0; //I13
                tracoRencimentoCalLata18L = 2; //I14
                tracoRencimentoAguaLata18L = 0; //I15
                redimentoTraco = 15.90909091; //I16
                  //calcula a area
                area = (comprimento * largura);
                //Calcula cimento
                resIntermeiarioCimento = (((area/redimentoTraco)*tracoRencimentoCimento50kl*50)+((area/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*espessura;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((area/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*espessura;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = 0;
                resFinalBrita  = 0;
                //Calcula  cal
                resIntermeiarioCal = (((area/redimentoTraco)*tracoRencimentoCalLata18L*12))*espessura;
                resFinalCal = Math.ceil(resIntermeiarioCal/20);
            }
            //Calcula material para viga
            if(finalidade.trim() == "viga")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 1; //I10
                tracoRencimentoCimentoLata18L = 0; //I11
                tracoRencimentoAreiaLata18L = 4; //I12
                tracoRencimentoBritaLata18L = 5.5; //I13
                tracoRencimentoCalLata18L = 0; //I14
                tracoRencimentoAguaLata18L = 1.25; //I15
                redimentoTraco = 0.14; //I16
                //cacula volume m³ cubico
                volume = (secaoAltura/100)*(secaoBase/100)*comprimento;
                //Calcula cimento
                resIntermeiarioCimento = (((volume/redimentoTraco)*tracoRencimentoCimento50kl*50)+((volume/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*referenciaQtd;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((volume/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*referenciaQtd;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = (((volume/redimentoTraco)*tracoRencimentoBritaLata18L*18)/1000)*referenciaQtd;
                resFinalBrita  = Math.ceil(resIntermeiarioBrita);
                //Cal é zero para viga
                resIntermeiarioCal = 0;
                resFinalCal = 0;
            }
            //Calcula material para viga cilindrica
            if(finalidade.trim() == "viga_cilindrica")
            {
                // Tebela de Refencia - Traços e Rendimento
                referenciaQtd = 1;
                tracoRencimentoCimento50kl = 1; //I10
                tracoRencimentoCimentoLata18L = 0; //I11
                tracoRencimentoAreiaLata18L = 4; //I12
                tracoRencimentoBritaLata18L = 5.5; //I13
                tracoRencimentoCalLata18L = 0; //I14
                tracoRencimentoAguaLata18L = 1.25; //I15
                redimentoTraco = 0.14; //I16
                 //cacula volume m³ cubico
                volume = ((3.14*(secaoDiametro/100)*(secaoDiametro/100))/4)*comprimento;
                //Calcula cimento
                resIntermeiarioCimento = (((volume/redimentoTraco)*tracoRencimentoCimento50kl*50)+((volume/redimentoTraco)*tracoRencimentoCimentoLata18L*22.7))*referenciaQtd;
                resFinalCimento50k = Math.ceil(resIntermeiarioCimento/50);
                resFinalCimento40k = Math.ceil(resIntermeiarioCimento/40);
                //Calcula Areia
                resIntermeiarioAreia = (((volume/redimentoTraco)*tracoRencimentoAreiaLata18L*18)/1000)*referenciaQtd;
                resFinalAreia = Math.ceil(resIntermeiarioAreia);
                //Calcula Brita
                resIntermeiarioBrita = (((volume/redimentoTraco)*tracoRencimentoBritaLata18L*18)/1000)*referenciaQtd;
                resFinalBrita  = Math.ceil(resIntermeiarioBrita);
                //Cal é zero para viga
                resIntermeiarioCal = 0;
                resFinalCal = 0;
            }
            //imprime o resultado
            //alert( "Cimento = " +resIntermeiarioCimento + "|" + resFinalCimento50k + "|" + resFinalCimento40k);
            //alert( "Areia = " +resIntermeiarioAreia + "|" + resFinalAreia);
            //alert( "Brita = " +resIntermeiarioBrita + "|" + resFinalBrita);
            //alert( "Cal = " +resIntermeiarioCal + "|" + resFinalCal);
			$('#materiais-resultado-geral').removeClass("inputHidden");
			$('#materiais-resultado-geral').addClass("inputShow");
            // imprime os resultados finais
            $('#res-final-cimento-50kl').html("<b>CIMENTO 50KG:</b> "+resFinalCimento50k+" Saco(s)");
            $('#res-final-cimento-40kl').html("<b>CIMENTO 40KG:</b> "+resFinalCimento40k+" Saco(s)");
            $('#res-final-areia').html("<b>AREIA:</b> "+resFinalAreia+" M³");
            $('#res-final-brita').html("<b>BRITA:</b> "+resFinalBrita+" M³");
            $('#res-final-cal').html("<b>CAL:</b> "+resFinalCal+" Saco(s) 20KG");
            // imprime os resultados intermediarios
            $('#res-intermeriaria-cimento').html("<b>Cimento:</b> " + parseFloat(resIntermeiarioCimento.toFixed(2)) + " KG");
            $('#res-intermeriaria-areia').html("<b>Areia:</b> " + parseFloat(resIntermeiarioAreia.toFixed(2)) + " M³");
            $('#res-intermeriaria-brita').html("<b>Brita:</b> " + parseFloat(resIntermeiarioBrita.toFixed(2)) + " M³");
            $('#res-intermeriaria-cal').html("<b>Cal:</b> " + parseFloat(resIntermeiarioCal.toFixed(2)) + " KG");
        }
		//Botão resetar campos
		$("#btn-materiais-limpar").click(function(){
			$('#materiais-largura').val('');
			$('#materiais-comprimento').val('');
			$('#materiais-area').val('');
			$('#materiais-espessura').val('');
			$('#materiais-profundidade').val('');
			$('#materiais-secao-altura').val('');
			$('#materiais-secao-base').val('');
			$('#materiais-secao-diametro').val('');
			$('#materiais-resultado-geral').removeClass("inputShow");
			$('#materiais-resultado-geral').addClass("inputHidden");
		})
    })
})(jQuery);