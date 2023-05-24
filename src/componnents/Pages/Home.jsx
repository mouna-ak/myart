import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Font from "react-font";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="myHome col-12 vh-100 mb-5 mt-5">
        <Font family="Inconsolata">
          <h1> Bienvenue sur notre plateforme web de dessin ! </h1>
        </Font>

        <hr />

        <Container>
          <Row>
            <Col className="bg-dark bg-opacity-75 text-light fw-bolder p-5 mybg1">
              <div className="bg-dark p-3 bg-opacity-75">
                Êtes-vous prêt à donner vie à vos images en les transformant en
                véritables œuvres d'art ? Notre application de dessin vous offre
                une expérience unique où vous pouvez soumettre vos propres
                images et les voir prendre vie grâce au talent de nos artistes.
                Notre équipe d'artistes expérimentés est prête à donner vie à
                vos idées. Il vous suffit simplement de télécharger vos images
                et de nous laisser faire le reste.Notre processus est simple et
                transparent. Vous téléchargez votre image, nous l'examinons
                attentivement pour comprendre vos attentes et nous la confions à
                l'un de nos talentueux artistes. Ils utilisent leur expertise
                pour créer une interprétation artistique de votre image, en
                ajoutant une touche personnelle qui fait de chaque dessin une
                pièce unique. Nous croyons en la communication ouverte et en
                collaboration avec nos utilisateurs. Pendant le processus de
                dessin, vous aurez la possibilité de donner des indications et
                des commentaires à notre artiste, afin de vous assurer que le
                résultat final correspond à vos attentes. Nous avons hâte de
                collaborer avec vous et de vous offrir une expérience artistique
                exceptionnelle !
              </div>
            </Col>
            <Col>
              <div className="bg-light p-5 fst-italic text-light fw-bolder mybg2">
                <div className="bg-dark p-3 bg-opacity-75">
                  <p>
                    {" "}
                    Note: L'utilisation des images téléchargées est strictement
                    réservée à la création des dessins commandés et ne sera en
                    aucun cas utilisée à d'autres fins sans votre consentement.
                    Votre confidentialité et la protection de vos données sont
                    notre priorité absolue.
                  </p>
                </div>
              </div>

              <Link
                to={"formulaire"}
                className="btn mt-5 btn-dark btn-lg fst-italic"
              >
                Get started
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
