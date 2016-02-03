<!DOCTYPE html>
<html lang="es" dir="ltr">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta name="robots" content="noindex">
<meta name="referrer" content="origin-when-crossorigin">
<title>Exportar: crm - Adminer</title>
<link rel="stylesheet" type="text/css" href="adminer-4.2.3.php?file=default.css&amp;version=4.2.3">
<script type="text/javascript" src="adminer-4.2.3.php?file=functions.js&amp;version=4.2.3"></script>
<link rel="shortcut icon" type="image/x-icon" href="adminer-4.2.3.php?file=favicon.ico&amp;version=4.2.3">
<link rel="apple-touch-icon" href="adminer-4.2.3.php?file=favicon.ico&amp;version=4.2.3">
<link rel="stylesheet" type="text/css" href="adminer.css">

<body class="ltr nojs" onkeydown="bodyKeydown(event);" onclick="bodyClick(event);">
<script type="text/javascript">
document.body.className = document.body.className.replace(/ nojs/, ' js');
var offlineMessage = 'You are offline.';
</script>

<div id="help" class="jush-sql jsonly hidden" onmouseover="helpOpen = 1;" onmouseout="helpMouseout(this, event);"></div>

<div id="content">
<p id="breadcrumb"><a href="adminer-4.2.3.php">MySQL</a> &raquo; <a href='adminer-4.2.3.php?username=root' accesskey='1' title='Alt+Shift+1'>Servidor</a> &raquo; <a href="adminer-4.2.3.php?username=root&amp;db=crm">crm</a> &raquo; Exportar
<h2>Exportar: crm</h2>
<div id='ajaxstatus' class='jsonly hidden'></div>

<form action="" method="post">
<table cellspacing="0">
<tr><th>Salida<td><label><input type='radio' name='output' value='text' checked>mostrar</label><label><input type='radio' name='output' value='file'>archivo</label><label><input type='radio' name='output' value='gz'>gzip</label>
<tr><th>Formato<td><label><input type='radio' name='format' value='sql' checked>SQL</label><label><input type='radio' name='format' value='csv'>CSV,</label><label><input type='radio' name='format' value='csv;'>CSV;</label><label><input type='radio' name='format' value='tsv'>TSV</label>
<tr><th>Base de datos<td><select name='db_style'><option><option>USE<option selected>DROP+CREATE<option>CREATE</select><label><input type='checkbox' name='routines' value='1' checked>Procedimientos</label><label><input type='checkbox' name='events' value='1' checked>Eventos</label><tr><th>Tablas<td><select name='table_style'><option><option selected>DROP+CREATE<option>CREATE</select><label><input type='checkbox' name='auto_increment' value='1'>Incremento automático</label><label><input type='checkbox' name='triggers' value='1' checked>Disparadores</label><tr><th>Datos<td><select name='data_style'><option><option>TRUNCATE+INSERT<option selected>INSERT<option>INSERT+UPDATE</select></table>
<p><input type="submit" value="Exportar">
<input type="hidden" name="token" value="107988:917275">

<table cellspacing="0">
<thead><tr><th style='text-align: left;'><label class='block'><input type='checkbox' id='check-tables' checked onclick='formCheck(this, /^tables\[/);'>Tablas</label><th style='text-align: right;'><label class='block'>Datos<input type='checkbox' id='check-data' checked onclick='formCheck(this, /^data\[/);'></label></thead>
<tr><td><label class='block'><input type='checkbox' name='tables[]' value='actividades' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);">actividades</label><td align='right'><label class='block'><span id='Rows-actividades'></span><input type='checkbox' name='data[]' value='actividades' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-data&#039;);"></label>
<tr><td><label class='block'><input type='checkbox' name='tables[]' value='contactos' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);">contactos</label><td align='right'><label class='block'><span id='Rows-contactos'></span><input type='checkbox' name='data[]' value='contactos' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-data&#039;);"></label>
<tr><td><label class='block'><input type='checkbox' name='tables[]' value='ordenes' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);">ordenes</label><td align='right'><label class='block'><span id='Rows-ordenes'></span><input type='checkbox' name='data[]' value='ordenes' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-data&#039;);"></label>
<tr><td><label class='block'><input type='checkbox' name='tables[]' value='usuarios' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-tables&#039;);">usuarios</label><td align='right'><label class='block'><span id='Rows-usuarios'></span><input type='checkbox' name='data[]' value='usuarios' checked onclick="checkboxClick(event, this); formUncheck(&#039;check-data&#039;);"></label>
<script type='text/javascript'>ajaxSetHtml('adminer-4.2.3.php?username=root&db=crm&script=db');</script>
</table>
</form>
</div>

<form action='' method='post'>
<div id='lang'>Idioma: <select name='lang' onchange="this.form.submit();"><option value="en">English<option value="ar">العربية<option value="bg">Български<option value="bn">বাংলা<option value="ca">Català<option value="cs">Čeština<option value="da">Dansk<option value="de">Deutsch<option value="el">Ελληνικά<option value="es" selected>Español<option value="et">Eesti<option value="fa">فارسی<option value="fr">Français<option value="gl">Galego<option value="hu">Magyar<option value="id">Bahasa Indonesia<option value="it">Italiano<option value="ja">日本語<option value="ko">한국어<option value="lt">Lietuvių<option value="nl">Nederlands<option value="no">Norsk<option value="pl">Polski<option value="pt">Português<option value="pt-br">Português (Brazil)<option value="ro">Limba Română<option value="ru">Русский язык<option value="sk">Slovenčina<option value="sl">Slovenski<option value="sr">Српски<option value="ta">த‌மிழ்<option value="th">ภาษาไทย<option value="tr">Türkçe<option value="uk">Українська<option value="vi">Tiếng Việt<option value="zh">简体中文<option value="zh-tw">繁體中文</select> <input type='submit' value='Usar' class='hidden'>
<input type='hidden' name='token' value='917633:154190'>
</div>
</form>
<form action="" method="post">
<p class="logout">
<input type="submit" name="logout" value="Cerrar sesión" id="logout">
<input type="hidden" name="token" value="107988:917275">
</p>
</form>
<div id="menu">
<h1>
<a href='https://www.adminer.org/' target='_blank' id='h1'>Adminer</a> <span class="version">4.2.3</span>
<a href="https://www.adminer.org/#download" target="_blank" id="version"></a>
</h1>
<script type="text/javascript" src="adminer-4.2.3.php?file=jush.js&amp;version=4.2.3"></script>
<script type="text/javascript">
var jushLinks = { sql: [ 'adminer-4.2.3.php?username=root&db=crm&table=$&', /\b(actividades|contactos|ordenes|usuarios)\b/g ] };
jushLinks.bac = jushLinks.sql;
jushLinks.bra = jushLinks.sql;
jushLinks.sqlite_quo = jushLinks.sql;
jushLinks.mssql_bra = jushLinks.sql;
bodyLoad('5.5');
</script>
<form action="">
<p id="dbs">
<input type="hidden" name="username" value="root"><span title='base de datos'>DB</span>: <select name='db' onmousedown='dbMouseDown(event, this);' onchange='dbChange(this);'><option value=""><option selected>crm<option>information_schema<option>mycrm<option>mysql<option>performance_schema<option>sait_claves<option>saitlicences<option>soportebk</select><input type='submit' value='Usar' class='hidden'>
<input type="hidden" name="dump" value=""></p></form>
<p class='links'><a href='adminer-4.2.3.php?username=root&amp;db=crm&amp;sql='>Comando SQL</a>
<a href='adminer-4.2.3.php?username=root&amp;db=crm&amp;import='>Importar</a>
<a href='adminer-4.2.3.php?username=root&amp;db=crm&amp;dump=' id='dump' class='active '>Exportar</a>
<a href="adminer-4.2.3.php?username=root&amp;db=crm&amp;create=">Crear tabla</a>
<p id='tables' onmouseover='menuOver(this, event);' onmouseout='menuOut(this);'>
<a href="adminer-4.2.3.php?username=root&amp;db=crm&amp;select=actividades" class='select'>registros</a> <a href="adminer-4.2.3.php?username=root&amp;db=crm&amp;table=actividades" title='Mostrar estructura'>actividades</a><br>
<a href="adminer-4.2.3.php?username=root&amp;db=crm&amp;select=contactos" class='select'>registros</a> <a href="adminer-4.2.3.php?username=root&amp;db=crm&amp;table=contactos" title='Mostrar estructura'>contactos</a><br>
<a href="adminer-4.2.3.php?username=root&amp;db=crm&amp;select=ordenes" class='select'>registros</a> <a href="adminer-4.2.3.php?username=root&amp;db=crm&amp;table=ordenes" title='Mostrar estructura'>ordenes</a><br>
<a href="adminer-4.2.3.php?username=root&amp;db=crm&amp;select=usuarios" class='select'>registros</a> <a href="adminer-4.2.3.php?username=root&amp;db=crm&amp;table=usuarios" title='Mostrar estructura'>usuarios</a><br>
</div>
<script type="text/javascript">setupSubmitHighlight(document);</script>
