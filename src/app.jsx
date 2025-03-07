import { ShoppingCart, Timer, Package, Coffee } from "lucide-react";
import coffeeImg from "./assets/coffee.svg";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <Header />
      <main>
        <div id="content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul className="info-list">
            <li>
              <ShoppingCart
                className="icon yellow-dark"
                size={32}
                weight="fill"
              />
              <span>Compra simples e segura</span>
            </li>

            <li>
              <Package className="icon base-text" size={32} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </li>

            <li>
              <Timer className="icon yellow" size={32} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </li>

            <li>
              <Coffee className="icon purple" size={32} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
        <div>
          <img src={coffeeImg} alt="" />
        </div>
      </main>
      <section>
        <h2>Nossos cafés</h2>
        <p>
          Quantidade de cafés: <span id="cafe-count">0</span>
        </p>
        <div>
          <button id="remove-cafe">Remover -</button>
        </div>

        <p>Tradicional</p>
        <div className="coffee">
          <img src="./assets/coffees/expresso.png" alt="" />
          <div>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Americano</p>
        <div className="coffee">
          <img src="./assets/coffees/americano.png" alt="" />
          <div>
            <h3>Expresso diluído, menos intenso que o tradicional</h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Cremoso</p>
        <div className="coffee">
          <img
            src="https://cdn.example.com/assets/coffees/expresso-cremoso.png"
            alt=""
          />
          <div>
            <h3>Café expresso tradicional com espuma cremosa</h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Gelado</p>
        <div className="coffee">
          <img src="./assets/coffees/expresso-gelado.png" alt="" />
          <div>
            <h3>Bebida preparada com Café expresso e cubos de gelo</h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão Gelado clicado!")}>
            Comprar
          </button>
        </div>

        <p>Café com leite</p>
        <div className="coffee">
          <img src="./assets/coffees/cafe-com-leite.png" alt="" />
          <div>
            <h3>
              Uma dose de Café expresso com o dobro de leite e espuma cremosa
            </h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Latte</p>
        <div className="coffee">
          <img src="./assets/coffees/latte.png" alt="" />
          <div>
            <h3>
              Uma dose de Café expresso com o dobro de leite e espuma cremosa
            </h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Capuccino</p>
        <div className="coffee">
          <img src="./assets/coffees/capuccino.png" alt="Capuccino" />
          <div>
            <h3>
              Bebida com canela feita de doses iguais de Café, leite e espuma
            </h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Macchiato</p>
        <div className="coffee">
          <img src="./assets/coffees/macchiato.png" alt="" />
          <div>
            <h3>
              Café expresso misturado com um pouco de leite quente e espuma
            </h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Mochaccino</p>
        <div className="coffee">
          <img src="./assets/coffees/mochaccino.png" alt="" />
          <div>
            <h3>Café expresso com calda de chocolate, pouco leite e espuma</h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Chocolate Quente</p>
        <div className="coffee">
          <img src="./assets/coffees/chocolate-quente.png" alt="" />
          <div>
            <h3>
              Bebida feita com chocolate dissolvido no leite quente e caramelo
            </h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Cubano</p>
        <div className="coffee">
          <img src="./assets/coffees/cubano.png" alt="Cubano" />
          <div>
            <h3>
              Drink gelado de café expresso com rum, creme de leite e hortelã
            </h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Havaiano</p>
        <div className="coffee">
          <img src="./assets/coffees/havaiano.png" alt="" />
          <div>
            <h3>Bebida adocicada preparada com café e leite de coco</h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Árabe</p>
        <div className="coffee">
          <img src="./assets/coffees/arabe.png" alt="" />
          <div>
            <h3>Bebida preparada com graos de café árabe e especiarias</h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        <p>Irlandês</p>
        <div className="coffee">
          <img src="./assets/coffees/irlandes.png" alt="" />
          <div>
            <h3>Bebida a base de café, uísque irlandesa, açúcar e chantilly</h3>
            <p>R$9,90</p>
          </div>
          <button onClick={() => console.log("Botão clicado!")}>Comprar</button>
        </div>

        {/* COLOCAR A RENDERIZAÇÃO DOS CARDS AQUI */}
      </section>
    </>
  );
}
