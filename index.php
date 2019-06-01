<?php require_once 'template/header.php'; ?>
<!--Основаная область редактирования-->
<div class="container main-content">
    <div class="row">
        <div class="col-lg-9">
                <h1 class="title" contenteditable="true" placeholder="Заголовок статьи"></h1>
                <i>Имя автора</i>
                <hr>
            <div class="maintext">
                <p class="post-title" id="first_el" contenteditable="true" placeholder="Ваша история..."></p>
            </div>
        </div>


        <!--Боковое меню с кнопками-->
        <div class="col-lg-3">
            <?php require_once 'template/sidebar.php'; ?>
        </div>

    </div>
</div>




<?php require_once 'template/footer.php'; ?>

