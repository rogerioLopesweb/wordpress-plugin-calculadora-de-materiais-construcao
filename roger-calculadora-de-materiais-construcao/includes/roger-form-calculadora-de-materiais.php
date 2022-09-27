<?php
//chamar direto no php echo do_shortcode( '[calculadora_materiais]' );
add_shortcode ( 'calculadora_materiais' , 'form_calculadora_materiais' ) ;
function form_calculadora_materiais() {
  if (isset($_GET['para'])) {
    $para = $_GET['para'];
  } else {
    $para  =  "assentamento";
  }
  ?>
<div class="roger-calculadora">
	<div class="roger-calculadora-content">
		<form name="frm-calculadora-materiais" id="frm-calculadora-materiais" method="post" action="#">
			<div class="select-calc">
				<label for="materiais-finalidade" class="roger-text-select-calc-label">Selecione entre as opções abaixo o que gostaria de calcular:</label>
				<select id="materiais-finalidade" name="materiais-finalidade" class="roger-calc-input-select" aria-describedby="msg-erro-materiais-finalidade">
				<option value="assentamento" <?php if($para == "assentamento"){ echo 'selected';}?> >Assentamento</option>
				<option value="chapisco" <?php if($para == "chapisco"){ echo 'selected';}?>>Chapisco</option>
				<option value="concreto_magro" <?php if($para == "concreto_magro"){ echo 'selected';}?>>Concreto Magro</option>
				<option value="contrapiso" <?php if($para == "contrapiso"){ echo 'selected';}?>>Contrapiso</option>
				<option value="fundacao" <?php if($para == "fundacao"){ echo 'selected';}?>>Fundação</option>
				<option value="laje" <?php if($para == "laje"){ echo 'selected';}?>>Laje</option>
				<option value="pilar" <?php if($para == "pilar"){ echo 'selected';}?>>Pilar</option>
				<option value="pilar_cilindrico" <?php if($para == "pilar_cilindrico"){ echo 'selected';}?>>Pilar Cilíndrico</option>
				<option value="reboco" <?php if($para == "reboco"){ echo 'selected';}?>>Reboco</option>
				<option value="viga" <?php if($para == "viga"){ echo 'selected';}?>>Viga</option>
				</select>
		    </div>

			<div id="box-imagem-referencia">
				<img src="<?php echo content_url();?>/plugins/roger-calculadora-de-materiais-construcao/imagens/assentamento.png" id="img-assentamento">
				<img src="<?php echo content_url();?>/plugins/roger-calculadora-de-materiais-construcao/imagens/chapisco-e-reboco.png" id="img-chapisco">
				<img src="<?php echo content_url();?>/plugins/roger-calculadora-de-materiais-construcao/imagens/concreto-magro_contrapiso_laje.png" id="img-concreto-magro">
				<img src="<?php echo content_url();?>/plugins/roger-calculadora-de-materiais-construcao/imagens/fundacao.png" id="img-fundacao">
				<img src="<?php echo content_url();?>/plugins/roger-calculadora-de-materiais-construcao/imagens/pilar.png" id="img-pilar">
				<img src="<?php echo content_url();?>/plugins/roger-calculadora-de-materiais-construcao/imagens/pilar-cilindrico.png" id="img-pilar-cilindrico">
				<img src="<?php echo content_url();?>/plugins/roger-calculadora-de-materiais-construcao/imagens/viga.png" id="img-viga">
				<img src="<?php echo content_url();?>/plugins/roger-calculadora-de-materiais-construcao/imagens/viga-cilindrica.png" id="img-viga-cilindrica">
			</div>

			<div id="materiais-comprimento-block">
				<label for="materiais-comprimento-block" class="title-field">Comprimento</label>
					<input type="text" id="materiais-comprimento" name="materiais-comprimento" class="roger-form-control number-mask" placeholder="m"  aria-describedby="msg-erro-materiais-comprimento" required  autocomplete="off" >
					<div id="msg-erro-materiais-comprimento" class="invalid-feedback">Preencha a medida acima</div>
			</div>
			<div id="materiais-largura-block">
		        <label for="materiais-largura-block" class="title-field">Largura</label>
					<input type="text" id="materiais-largura" name="materiais-largura" class="roger-form-control number-mask" placeholder="m"  aria-describedby="msg-erro-materiais-largura" required  autocomplete="off" >
					<div id="msg-erro-materiais-largura" class="invalid-feedback">Preencha a medida acima</div>
			</div>
			<div id="materiais-secao-altura-block">
		        <label for="materiais-secao-altura" class="title-field">Altura (Seção)</label>
					<input type="text" id="materiais-secao-altura" name="materiais-secao-altura" class="roger-form-control number-mask" placeholder="cm"  aria-describedby="msg-erro-materiais-secao-altura" required  autocomplete="off" >
					<div id="msg-erro-materiais-secao-altura" class="invalid-feedback">Preencha a medida acima</div>
			</div>
			<div id="materiais-secao-base-block">
		        <label for="materiais-secao-base" class="title-field">Base (Seção)</label>
					<input type="text" id="materiais-secao-base" name="materiais-secao-base" class="roger-form-control number-mask" placeholder="cm"  aria-describedby="msg-erro-materiais-secao-base" required  autocomplete="off" >
					<div id="msg-erro-materiais-secao-base" class="invalid-feedback">Preencha a medida acima</div>
			</div>
			<div id="materiais-secao-diametro-block">
		        <label for="materiais-secao-diametro" class="title-field">Diâmetro (Seção)</label>
					<input type="text" id="materiais-secao-diametro" name="materiais-secao-diametro" class="roger-form-control number-mask" placeholder="cm"  aria-describedby="msg-erro-materiais-secao-diametro" required  autocomplete="off" >
					<div id="msg-erro-materiais-secao-diametro" class="invalid-feedback">Preencha a medida acima</div>
			</div>
			<div id="materiais-espessura-block">
				<label for="materiais-espessura" class="title-field">Espessura</label>
					<input type="text" id="materiais-espessura" name="materiais-espessura" class="roger-form-control number-mask" placeholder="cm"  aria-describedby="msg-erro-materiais-espessura" required  autocomplete="off" >
					<div id="msg-erro-materiais-espessura" class="invalid-feedback">Preencha a medida acima</div>
			</div>
			<div id="materiais-profundidade-block">
				<label for="materiais-profundidade" class="title-field">Profundidade</label>
				<input type="text" id="materiais-profundidade" name="materiais-profundidade" class="roger-form-control number-mask" placeholder="m"  aria-describedby="msg-erro-materiais-profundidade" required  autocomplete="off" >
				<div id="msg-erro-materiais-profundidade" class="invalid-feedback">Preencha a medida acima</div>
			</div>
			<button type="button" class="btn_calc_reset" id="btn-materiais-limpar">LIMPAR <i class="far fa-undo-alt"></i></button>
			<button type="button" class="btn_calc_enviar" id="btn-materiais">CALCULAR</button>
		</form>
		<br>
		<div id="materiais-resultado-geral">
			<div class="arrow-up"></div>
			<div id="materiais-resultado-finais" class="result">
				<span class="title-result">Resultado</span>
				<span class="subtitle-result">Quantidades Finais</span>
				<div class="row">
				<div class="subresult col-md-12 col-12">
					<div id="res-final-cimento-50kl"><b>CIMENTO:</b> 0 Saco (50KG)</div>
					<div class="ou-cimento">ou</div>
					<div id="res-final-cimento-40kl">ou <b>CIMENTO:</b> 1 Saco (40KG)</div>
					<hr>
					<div id="res-final-areia"><b>AREIA:</b> 0 (M³)</div>
					<hr>
					<div id="res-final-brita"><b>BRITA:</b> 0 (M³)</div>
					<hr>
					<div id="res-final-cal"><b>CAL:</b> 0 Saco (20KG)</div>
				</div>
				
				</div>
			</div>
			<h3 class="more-info">Mais informações</h3>
			<div id="materiais-resultado-mais-info">
				<h5 class="collapsed info-title" data-toggle="collapse" data-target="#materiais-resultado-qtd-intermeria" aria-expanded="false" aria-controls="materiais-resultado-qtd-intermeria">Quantidades Exatas
					<span class="if-collapsed fal fa-chevron-down" style="float: right;"></span>
					<span class="if-not-collapsed fal fa-chevron-up" style="float: right;"></span>
				</h5>
				<div id="materiais-resultado-qtd-intermeria" class="collapse info-details">
					<div id="res-intermeriaria-cimento"><b>Cimento:</b> 0</div>
					<div id="res-intermeriaria-areia"><b>Areia:</b> 0 (m³)</div>
					<div id="res-intermeriaria-brita"><b>Brita:</b> 0 (m³)</div>
					<div id="res-intermeriaria-cal"><b>Cal:</b> 0 (m³)</div>
				</div>
			</div>
			<hr style="margin: 16px 0px 16px 0px !important;">
			<div id="materiais-resultado-tracos-rendimentos">
			<h5 class="collapsed info-title" data-toggle="collapse" data-target="#tracos-rendimentos" aria-expanded="false" aria-controls="tracos-rendimentos">Traços e Rendimentos
				<span class="if-collapsed fal fa-chevron-down" style="float: right;"></span>
				<span class="if-not-collapsed fal fa-chevron-up" style="float: right;"></span>
			</h5>
			<div id="tracos-rendimentos" class="collapse info-details">
				<div id="tracos-rendimentos-assentamento" class="info-details">
					<div><b>Cimento:</b> 0 Saco 50KG</div>
					<div><b>Cimento:</b> 1 Lata 18L</div>
					<div><b>Areia:</b> 8 Lata 18L</div>
					<div><b>Brita:</b> 0 Lata 18L</div>
					<div><b>Cal:</b> 2 Lata 18L</div>
					<div><b>Água:</b> 0L</div>
					<div><b>Rendimento/Traço:</b> 7,27</div>
					<!-- <div><b>Rendimento/Traço:</b> 7,272727273</div> -->
				</div>
				<div id="tracos-rendimentos-chapisco" class="info-details">
					<div><b>Cimento:</b> 0 Saco 50KG</div>
					<div><b>Cimento:</b> 1 Lata 18L</div>
					<div><b>Areia:</b> 3 Lata 18L</div>
					<div><b>Brita:</b> 0 Lata 18L</div>
					<div><b>Cal:</b> 0 Lata 18L</div>
					<div><b>Água:</b> 0L</div>
					<div><b>Rendimento/Traço:</b> 13,64</div>
					<!-- <div><b>Rendimento/Traço:</b> 13,63636364</div> -->
				</div>
				<div id="tracos-rendimentos-concreto-magro" class="info-details">
					<div><b>Cimento:</b> 1 Saco 50KG</div>
					<div><b>Cimento:</b> 0 Lata 18L</div>
					<div><b>Areia:</b> 8,5 Lata 18L</div>
					<div><b>Brita:</b> 11,5 Lata 18L</div>
					<div><b>Cal:</b> 0 Lata 18L</div>
					<div><b>Água:</b> 2L</div>
					<div><b>Rendimento/Traço:</b> 0,25</div>
				</div>
				<div id="tracos-rendimentos-contrapiso" class="info-details">
					<div><b>Cimento:</b> 0 Saco 50KG</div>
					<div><b>Cimento:</b> 1 Lata 18L</div>
					<div><b>Areia:</b> 3 Lata 18L</div>
					<div><b>Brita:</b> 0 Lata 18L</div>
					<div><b>Cal:</b> 0 Lata 18L</div>
					<div><b>Água:</b> 0L</div>
					<div><b>Rendimento/Traço:</b> 4,55</div>
					<!-- <div><b>Rendimento/Traço:</b> 4,545454545</div> -->
				</div>
				<div id="tracos-rendimentos-fundacao" class="info-details">
					<div><b>Cimento:</b> 1 Saco 50KG</div>
					<div><b>Cimento:</b> 0 Lata 18L</div>
					<div><b>Areia:</b> 5 Lata 18L</div>
					<div><b>Brita:</b> 6,5 Lata 18L</div>
					<div><b>Cal:</b> 0 Lata 18L</div>
					<div><b>Água:</b> 1,5L</div>
					<div><b>Rendimento/Traço:</b> 0,16</div>
				</div>
				<div id="tracos-rendimentos-laje" class="info-details">
					<div><b>Cimento:</b> 1 Saco 50KG</div>
					<div><b>Cimento:</b> 0 Lata 18L</div>
					<div><b>Areia:</b> 4 Lata 18L</div>
					<div><b>Brita:</b> 5,5 Lata 18L</div>
					<div><b>Cal:</b> 0 Lata 18L</div>
					<div><b>Água:</b> 1,25L</div>
					<div><b>Rendimento/Traço:</b> 0,14</div>
				</div>
				<div id="tracos-rendimentos-pilar" class="info-details">
					<div><b>Cimento:</b> 1 Saco 50KG</div>
					<div><b>Cimento:</b> 0 Lata 18L</div>
					<div><b>Areia:</b> 4 Lata 18L</div>
					<div><b>Brita:</b> 5,5 Lata 18L</div>
					<div><b>Cal:</b> 0 Lata 18L</div>
					<div><b>Água:</b> 1,25L</div>
					<div><b>Rendimento/Traço:</b> 0,14</div>
				</div>
				<div id="tracos-rendimentos-pilar-cilindrico" class="info-details">
					<div><b>Cimento:</b> 1 Saco 50KG</div>
					<div><b>Cimento:</b> 0 Lata 18L</div>
					<div><b>Areia:</b> 4 Lata 18L</div>
					<div><b>Brita:</b> 5,5 Lata 18L</div>
					<div><b>Cal:</b> 0 Lata 18L</div>
					<div><b>Água:</b> 1,25L</div>
					<div><b>Rendimento/Traço:</b> 0,14</div>
				</div>
				<div id="tracos-rendimentos-reboco" class="info-details">
					<div><b>Cimento:</b> 0 Saco 50KG</div>
					<div><b>Cimento:</b> 1 Lata 18L</div>
					<div><b>Areia:</b> 9 Lata 18L</div>
					<div><b>Brita:</b> 0 Lata 18L</div>
					<div><b>Cal:</b> 2 Lata 18L</div>
					<div><b>Água:</b> 0L</div>
					<div><b>Rendimento/Traço:</b> 15,90</div>
					<!-- <div><b>Rendimento/Traço:</b> 15,90909091</div> -->
				</div>
				<div id="tracos-rendimentos-viga" class="info-details">
					<div><b>Cimento:</b> 1 Saco 50KG</div>
					<div><b>Cimento:</b> 0 Lata 18L</div>
					<div><b>Areia:</b> 4 Lata 18L</div>
					<div><b>Brita:</b> 5,5 Lata 18L</div>
					<div><b>Cal:</b> 0 Lata 18L</div>
					<div><b>Água:</b> 1,25L</div>
					<div><b>Rendimento/Traço:</b> 0,14</div>
				</div>
				<div id="tracos-rendimentos-viga-cilindrica" class="info-details">
					<div><b>Cimento:</b> 1 Saco 50KG</div>
					<div><b>Cimento:</b> 0 Lata 18L</div>
					<div><b>Areia:</b> 4 Lata 18L</div>
					<div><b>Brita:</b> 5,5 Lata 18L</div>
					<div><b>Cal:</b> 0 Lata 18L</div>
					<div><b>Água:</b> 1,25L</div>
					<div><b>Rendimento/Traço:</b> 0,14</div>
				</div>
			</div>
			</div>
			<hr style="margin: 16px 0px 16px 0px !important;">
		</div>
	</div>
</div>
<?php
}
?>
<?php
/**********************************************************************************************/
//adciona o js no footer wp
add_action('wp_enqueue_scripts', 'roger_calculadora_scripts_method');
function roger_calculadora_scripts_method() {
// register your script location, dependencies and version
$pathDirectory = content_url()  . '/plugins/roger-calculadora-de-materiais-construcao/js/calculadora.js';
wp_register_script('roger_calculadora_script',$pathDirectory, array('jquery'),'1.0' );
// enqueue the script
wp_enqueue_script('roger_calculadora_script');
}
//adciona o css
add_action('wp_enqueue_scripts', 'roger_calculadora_style_method');
function roger_calculadora_style_method() {
// register your script location, dependencies and version
$pathDirectory = content_url()  . '/plugins/roger-calculadora-de-materiais-construcao/css/calculadora.css';
wp_enqueue_style('roger_calculadora_script',$pathDirectory, array(), '0.1.0', 'all' );
// enqueue the script
wp_enqueue_script('roger_calculadora_script');
}
?>