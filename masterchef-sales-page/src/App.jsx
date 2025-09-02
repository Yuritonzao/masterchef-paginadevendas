import './App.css'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { ChefHat, Star, Users, Clock, Award, Mail, Phone, MapPin } from 'lucide-react'
import ebookCover from './assets/ebook_cover.png'
import gourmetDish from './assets/gourmet_dish.png'
import chefJurandi from './assets/chef_jurandi.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MasterChef Receitas</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#inicio" className="text-gray-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Início</a>
                <a href="#dicas" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Dicas de Chefs</a>
                <a href="#suporte" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Suporte</a>
                <a href="#treinamento" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Treinamento</a>
                <a href="#contato" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Livro de Receitas <span className="text-orange-600">MasterChef</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                100 Receitas Exclusivas para Você Dominar a Cozinha!
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Transforme sua paixão em arte culinária com o guia definitivo para cozinheiros ambiciosos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                  Quero Meu E-book Agora!
                </Button>
                <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
                  Baixe Sua Amostra Grátis!
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={ebookCover} 
                alt="Capa do Livro de Receitas MasterChef" 
                className="max-w-md w-full h-auto shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={gourmetDish} 
                alt="Prato Gourmet MasterChef" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre o Livro de Receitas MasterChef
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                O "Livro de Receitas MasterChef" é a sua porta de entrada para o universo da alta gastronomia. 
                Com 100 receitas exclusivas, este e-book foi criado para cozinheiros como você, que desejam ir 
                além do básico e explorar técnicas avançadas, ingredientes inusitados e combinações de sabores surpreendentes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Descobrir</strong> segredos de chefs e truques que farão a diferença em seus pratos.</p>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Aprender</strong> técnicas de preparo e apresentação que impressionarão seus convidados.</p>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Explorar</strong> uma variedade de cozinhas e culturas através de receitas autênticas e inovadoras.</p>
                </div>
                <div className="flex items-start">
                  <ChefHat className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Transformar</strong> ingredientes simples em experiências gastronômicas memoráveis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que o Livro de Receitas MasterChef é Essencial Para Você?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>100 Receitas Exclusivas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Um vasto repertório para você explorar e surpreender.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Técnicas Avançadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Aprenda os segredos dos grandes chefs e eleve seu nível culinário.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Inspiração Diária</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Novas ideias e desafios para sua cozinha todos os dias.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Economia de Tempo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Receitas otimizadas para o seu dia a dia, com ingredientes acessíveis.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Versatilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Opções para todos os gostos e ocasiões, do dia a dia a eventos especiais.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Badge className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Acesso Vitalício</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tenha o e-book sempre à mão, em qualquer dispositivo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chef Tips Section */}
      <section id="dicas" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desvende os Segredos dos Grandes Chefs com Dicas Exclusivas!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nesta seção, você terá acesso a um compilado de dicas e truques diretamente da cozinha de chefs renomados. 
              Aprenda a escolher os melhores ingredientes, a dominar o ponto certo de cocção, a harmonizar sabores e a 
              apresentar seus pratos como um verdadeiro profissional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ChefHat className="h-6 w-6 text-orange-600 mr-2" />
                  Seleção de Ingredientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Aprenda a escolher os melhores ingredientes e como armazená-los adequadamente para preservar sabor e qualidade.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-6 w-6 text-orange-600 mr-2" />
                  Técnicas de Cocção
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Domine diferentes métodos de cocção e descubra quando usar cada técnica para obter resultados perfeitos.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 text-orange-600 mr-2" />
                  Apresentação Profissional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Transforme seus pratos em obras de arte com técnicas de emplatamento e apresentação dos grandes restaurantes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chef Jurandi Training Section */}
      <section id="treinamento" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leve Suas Habilidades ao Próximo Nível com o Chef Jurandi!
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Como um bônus especial, você terá a oportunidade de participar de um treinamento exclusivo com o 
                renomado Chef Jurandi. Aprenda técnicas avançadas, segredos da alta gastronomia e receba feedback 
                personalizado para aprimorar ainda mais suas habilidades.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Uma experiência única para quem busca a excelência na cozinha.
              </p>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Quero Participar do Treinamento
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src={chefJurandi} 
                alt="Chef Jurandi" 
                className="max-w-md w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="suporte" className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conte com o Nosso Suporte Exclusivo!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Sabemos que a jornada culinária pode ter seus desafios. Por isso, ao adquirir o "Livro de Receitas MasterChef", 
            você terá acesso a um canal de suporte exclusivo para tirar suas dúvidas, compartilhar suas experiências e 
            receber orientações sempre que precisar.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Nossa equipe estará pronta para te ajudar a superar qualquer obstáculo e garantir que você aproveite ao 
            máximo cada receita.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            Acessar Suporte
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fale Conosco!
            </h2>
            <p className="text-lg text-gray-600">
              Tem alguma dúvida ou sugestão? Entre em contato conosco através do formulário abaixo ou pelos nossos canais de atendimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-orange-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">E-mail</h3>
                  <p className="text-gray-600">contato@masterchefReceitas.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-orange-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Telefone</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-orange-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não Espere Mais! Torne-se um MasterChef Hoje Mesmo!
          </h2>
          <p className="text-xl mb-8">
            O "Livro de Receitas MasterChef" é o investimento que faltava para você transformar sua paixão pela 
            culinária em uma verdadeira arte. Clique no botão abaixo e garanta seu acesso imediato a 100 receitas 
            exclusivas, dicas de chefs, suporte dedicado e a oportunidade de treinar com o Chef Jurandi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Quero Ser um MasterChef!
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
              Comprar Agora!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ChefHat className="h-8 w-8 text-orange-600" />
                <span className="ml-2 text-xl font-bold">MasterChef Receitas</span>
              </div>
              <p className="text-gray-400">
                Transformando paixão em arte culinária através de receitas exclusivas e treinamento de qualidade.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
                <li><a href="#dicas" className="text-gray-400 hover:text-white transition-colors">Dicas de Chefs</a></li>
                <li><a href="#suporte" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
                <li><a href="#treinamento" className="text-gray-400 hover:text-white transition-colors">Treinamento</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@masterchefReceitas.com</li>
                <li>(11) 99999-9999</li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MasterChef Receitas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
