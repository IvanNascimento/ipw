# Olá p5.js

## Apresentação

p5.js é uma biblioteca JavaScript feita para tornar programação acessível a artistas, designers, educadores e iniciantes. A biblioteca possui um conjunto completo de funcionalidades para desenho e animação.

Você pode utilizar um painel ou a página completa para criar suas animações.

## Download

Baixe os arquivos necessários a partir do link: [https://p5js.org/download/](https://p5js.org/download/).

Em **Complete Library**, clique em **p5.js complete**.

Descompacte o arquivo baixado em um novo diretório. Você terá um diretório com a seguinte estrutura

<pre>
seu-projeto
  |- addons
  |- empty-example
  |- p5.js
  |- p5.min.js
  |- p5.pre-min.js
</pre>

Iremos precisar, por enquanto, apenas do arquivo `p5.js`.

## Criando a página

No mesmo diretório do arquivo `p5.js`, crie uma página HTML vazia e salve como `index.html`. Na página, importe o arquivo, como mostrado a seguir:

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>p5.js</title>
    <script src="p5.js"></script>
  </head>
  <body>
  </body>
</html>
```

## Criando um sketch

Seu programa p5.js é criado em JavaScript. De acordo com as regras de organização de código aprendidas, você deve escrever seu código em um arquivo de extensão `.js` e importar no HTML.

No mesmo diretório de `index.html`, crie o arquivo `sketch.js` e insira o código abaixo.

```javascript
function setup() {

}

function draw() {
  ellipse(50, 50, 80, 80);
}
```

No arquivo `index.html`, importe o arquivo `sketch.js` logo após a importação de `p5.js` como indicado abaixo.

```html
...
<script src="p5.js"></script>
<script src="sketch.js"></script>
...
```

Para ver o arquivo no navegador, dê um clique duplo sobre o arquivo `index.html` a partir do seu gerenciador de arquivos. Se você estiver usando o Atom, clique com o botão direito no arquivo e, no menu seguinte, escolha a opção "Copiar caminho completo". Cole o caminho no navegador e aperte Enter.

Se você viu um círculo sobre uma página em branco, então deu tudo certo!

O projeto completado nesta parte está [aqui](https://github.com/antoniojnr/ipw/tree/master/projetos/p5js-inicio).

### Estrutura do sketch

Um *sketch* é um arquivo de animação. Para definir um *sketch*, você, tipicamente, precisará definir duas funções: `setup()` e `draw()`.

### `setup()`

A função `setup()` é chamada uma vez quando o programa inicia. É usada para definir propriedades iniciais do ambiente, como tamanho da tela e cor do plano de fundo, ou para carregar imagens e fontes no início do programa.

Somente pode haver uma função `setup()` para cada programa e ela não deve ser chamada novamente após sua execução inicial.

**Nota:** Variáveis declaradas dentro de `setup()` não são acessíveis dentro de outras funções, inclusive `draw()`.

### `draw()`

Chamada diretamente após `setup()`, a função `draw()` executa continuamente o código contido no seu bloco até que o programa seja finalizado ou até que `noLoop()` seja chamada.

Se `noLoop()` for chamada em `setup()`, `draw()` ainda será executada uma vez antes de parar. `draw()` é chamada automaticamente e nunca deve ser chamada explicitamente.

Controle-a com `noLoop()`, `redraw()` e `loop()`. Depois que `noLoop()` parar o código em `draw()`, `redraw()` faz com que o código dentro de `draw()` execute uma vez e `loop()` faz com que o código volte a executar continuamente.

## Configuração do sketch

Use as funções e constantes a seguir para configurar como o seu sketch. Você poderá definir propriedades como o tamanho do painel onde poderá desenhar, velocidade de atualização da animação, entre outros.

### `createCanvas()`

`createCanvas(largura, altura)` cria um novo painel de dimensões `largura` x `altura`.

### `resizeCanvas()`

`resizeCanvas(largura, altura)` redimensiona o painel com as novas dimensões `largura` x `altura`.

### `frameRate()`

`frameRate(fr)` define um novo valor para a quantidade de quadros por segundos desenhados. Para `frameRate(30)`, o programa tentará atualizar os quadros 30 vezes por segundo.

## Desenhando texto e formas


### `ellipse()`

`ellipse(x, y, r1, r2)` desenha uma elipse na posição de coordenadas `x` e `y`, e raios `r1` e `r2`.

### `line()`

`line(x1, y1, x2, y2)` desenha uma linha do ponto (`x1`, `y1`) a (`x2`, `y2`).

<pre>
       ._________.
 (x1,y1)         (x2,y2)
</pre>

### `rect()`

`rect(x, y, l, a)` desenha um retângulo com o canto superior esquerdo posicionado no ponto (`x`, `y`), de largura `l` e altura `a`.

### `text()`

`text('texto', x, y)` desenha o `'texto'` nas coordenadas (`x`, `y`). É possível ajustar alinhamento (`textAlign()`), espaçamento entre linhas (`textLeading()`), tamanho (`textSize()`) e estilo – negrito, itálico ou normal (`textStyle()`). Saiba mais na [documentação](https://p5js.org/reference/) de cada função.

## Próximo assunto

* [Tratando eventos](https://github.com/antoniojnr/ipw/blob/master/aulas/p5js-eventos.md)
* [Animações avançadas](https://github.com/antoniojnr/ipw/blob/master/aulas/p5js-animacoes-avancadas.md)

## Outras funções

Consulte a referência da linguagem para mais informações: [https://p5js.org/reference](https://p5js.org/reference)
