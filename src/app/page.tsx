'use client';

import { useState } from 'react';
import { Crown, Dumbbell, Apple, Music, MessageCircle, Trophy, ChevronRight, Play, Clock, Flame, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { mockWorkouts, mockRecipes, mockPlaylists, plans, quizQuestions } from '@/lib/mock-data';
import { Progress } from '@/components/ui/progress';

export default function KingFitnessApp() {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<any>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  const handleQuizAnswer = (questionId: number, value: string) => {
    setQuizAnswers({ ...quizAnswers, [questionId]: value });
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    }
  };

  const getRecommendedPlan = () => {
    const level = quizAnswers[1];
    if (level === 'avancado') return 'vip';
    if (level === 'intermediario') return 'premium';
    return 'basico';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-[#D4AF37]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="w-8 h-8 text-[#D4AF37]" />
              <h1 className="text-2xl font-bold">
                <span className="text-[#D4AF37]">King</span> Fitness
              </h1>
            </div>
            <Dialog open={showQuiz} onOpenChange={setShowQuiz}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#D4AF37] font-bold">
                  <Trophy className="w-4 h-4 mr-2" />
                  Começar Quiz
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#0B0B0B] border-[#D4AF37]/30 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-[#D4AF37]">
                    Descubra Seu Plano Ideal
                  </DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Responda algumas perguntas para personalizarmos sua experiência
                  </DialogDescription>
                </DialogHeader>
                
                {quizStep < quizQuestions.length ? (
                  <div className="space-y-6 py-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Pergunta {quizStep + 1} de {quizQuestions.length}</span>
                        <span>{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%</span>
                      </div>
                      <Progress value={((quizStep + 1) / quizQuestions.length) * 100} className="h-2" />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{quizQuestions[quizStep].question}</h3>
                      <div className="grid gap-3">
                        {quizQuestions[quizStep].options.map((option) => (
                          <Button
                            key={option.value}
                            variant="outline"
                            className="justify-start h-auto py-4 px-6 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-left"
                            onClick={() => handleQuizAnswer(quizQuestions[quizStep].id, option.value)}
                          >
                            <ChevronRight className="w-5 h-5 mr-3 text-[#D4AF37]" />
                            <span>{option.label}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 py-4">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto">
                        <Crown className="w-10 h-10 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#D4AF37]">Parabéns!</h3>
                      <p className="text-gray-300">
                        Baseado nas suas respostas, recomendamos o <span className="text-[#D4AF37] font-bold">{plans.find(p => p.id === getRecommendedPlan())?.name}</span>
                      </p>
                    </div>
                    
                    <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/10 border-[#D4AF37]/50">
                      <CardHeader>
                        <CardTitle className="text-[#D4AF37]">
                          {plans.find(p => p.id === getRecommendedPlan())?.name}
                        </CardTitle>
                        <CardDescription className="text-2xl font-bold text-white">
                          R$ {plans.find(p => p.id === getRecommendedPlan())?.price.toFixed(2)}/mês
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plans.find(p => p.id === getRecommendedPlan())?.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#D4AF37] font-bold"
                      onClick={() => {
                        setShowQuiz(false);
                        setQuizStep(0);
                        setQuizAnswers({});
                      }}
                    >
                      Começar Agora
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#FFD700]/5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/50 text-sm px-4 py-1">
              Transforme seu Corpo e Mente
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Você é o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">Rei</span> do seu próprio corpo
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Treinos personalizados, nutrição balanceada e acompanhamento profissional para alcançar seus objetivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#D4AF37] font-bold text-lg px-8"
                onClick={() => setShowQuiz(true)}
              >
                <Crown className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-lg px-8">
                Ver Planos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-[#0B0B0B]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Dumbbell, title: 'Treinos Personalizados', desc: 'Rotinas adaptadas ao seu nível' },
              { icon: Apple, title: 'Nutrição Balanceada', desc: 'Planos alimentares completos' },
              { icon: Music, title: 'Playlists Motivacionais', desc: 'Músicas para energizar seus treinos' },
              { icon: MessageCircle, title: 'Personal Online', desc: 'Suporte profissional 24/7' },
              { icon: Target, title: 'Reconhecimento de Alimentos', desc: 'Análise nutricional por foto' },
              { icon: Trophy, title: 'Acompanhamento de Progresso', desc: 'Monitore sua evolução' }
            ].map((feature, i) => (
              <Card key={i} className="bg-[#0B0B0B] border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-[#D4AF37] mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="workouts" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-[#0B0B0B] border border-[#D4AF37]/20">
              <TabsTrigger value="workouts" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">
                <Dumbbell className="w-4 h-4 mr-2" />
                Treinos
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">
                <Apple className="w-4 h-4 mr-2" />
                Nutrição
              </TabsTrigger>
              <TabsTrigger value="music" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">
                <Music className="w-4 h-4 mr-2" />
                Playlists
              </TabsTrigger>
            </TabsList>

            {/* Workouts Tab */}
            <TabsContent value="workouts" className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h3 className="text-3xl font-bold">Treinos Disponíveis</h3>
                <p className="text-gray-400">Escolha o treino ideal para hoje</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockWorkouts.map((workout) => (
                  <Card key={workout.id} className="bg-[#0B0B0B] border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedWorkout(workout)}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={workout.image_url} 
                        alt={workout.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-black">
                        {workout.level}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{workout.title}</CardTitle>
                      <CardDescription>{workout.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {workout.duration} min
                        </div>
                        <div className="flex items-center gap-1">
                          <Dumbbell className="w-4 h-4" />
                          {workout.exercises.length} exercícios
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Nutrition Tab */}
            <TabsContent value="nutrition" className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h3 className="text-3xl font-bold">Receitas Saudáveis</h3>
                <p className="text-gray-400">Nutrição balanceada para seus objetivos</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockRecipes.map((recipe) => (
                  <Card key={recipe.id} className="bg-[#0B0B0B] border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedRecipe(recipe)}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={recipe.image_url} 
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-black capitalize">
                        {recipe.meal_type}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{recipe.title}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-4 gap-2 text-center text-sm">
                        <div>
                          <div className="text-[#D4AF37] font-bold">{recipe.calories}</div>
                          <div className="text-gray-500 text-xs">kcal</div>
                        </div>
                        <div>
                          <div className="text-[#D4AF37] font-bold">{recipe.protein}g</div>
                          <div className="text-gray-500 text-xs">prot</div>
                        </div>
                        <div>
                          <div className="text-[#D4AF37] font-bold">{recipe.carbs}g</div>
                          <div className="text-gray-500 text-xs">carb</div>
                        </div>
                        <div>
                          <div className="text-[#D4AF37] font-bold">{recipe.fats}g</div>
                          <div className="text-gray-500 text-xs">gord</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Music Tab */}
            <TabsContent value="music" className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h3 className="text-3xl font-bold">Playlists Motivacionais</h3>
                <p className="text-gray-400">Músicas para energizar seus treinos</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockPlaylists.map((playlist) => (
                  <Card key={playlist.id} className="bg-[#0B0B0B] border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center mb-4">
                        <Music className="w-8 h-8 text-black" />
                      </div>
                      <CardTitle className="text-xl">{playlist.title}</CardTitle>
                      <CardDescription>{playlist.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {playlist.songs.slice(0, 3).map((song, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-[#D4AF37]/10 transition-colors">
                          <Play className="w-4 h-4 text-[#D4AF37]" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{song.title}</div>
                            <div className="text-xs text-gray-500 truncate">{song.artist}</div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full border-[#D4AF37]/30 hover:bg-[#D4AF37]/10">
                        Ver todas ({playlist.songs.length} músicas)
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0B0B0B] to-black">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-4xl font-bold">Escolha Seu Plano</h3>
            <p className="text-gray-400 text-lg">Invista na sua saúde e transformação</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.id} className={`bg-[#0B0B0B] border-[#D4AF37]/20 relative ${plan.popular ? 'ring-2 ring-[#D4AF37] scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="py-4">
                    <span className="text-4xl font-bold text-[#D4AF37]">R$ {plan.price.toFixed(2)}</span>
                    <span className="text-gray-400">/mês</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#D4AF37]' : 'bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30'} font-bold`}>
                    Assinar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Detail Dialog */}
      <Dialog open={!!selectedWorkout} onOpenChange={() => setSelectedWorkout(null)}>
        <DialogContent className="bg-[#0B0B0B] border-[#D4AF37]/30 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedWorkout && (
            <>
              <DialogHeader>
                <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img 
                    src={selectedWorkout.image_url} 
                    alt={selectedWorkout.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
                </div>
                <DialogTitle className="text-3xl text-[#D4AF37]">{selectedWorkout.title}</DialogTitle>
                <DialogDescription className="text-gray-300 text-base">
                  {selectedWorkout.description}
                </DialogDescription>
                <div className="flex items-center gap-4 pt-2">
                  <Badge className="bg-[#D4AF37] text-black">{selectedWorkout.level}</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {selectedWorkout.duration} minutos
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Flame className="w-4 h-4" />
                    {selectedWorkout.muscle_group}
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <h4 className="text-xl font-bold text-[#D4AF37]">Exercícios</h4>
                {selectedWorkout.exercises.map((exercise: any, i: number) => (
                  <Card key={i} className="bg-black/50 border-[#D4AF37]/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{i + 1}. {exercise.name}</CardTitle>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                            <span>{exercise.sets} séries</span>
                            <span>•</span>
                            <span>{exercise.reps} reps</span>
                            <span>•</span>
                            <span>{exercise.rest}s descanso</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-300">{exercise.instructions}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#D4AF37] font-bold">
                <Play className="w-4 h-4 mr-2" />
                Iniciar Treino
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Recipe Detail Dialog */}
      <Dialog open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
        <DialogContent className="bg-[#0B0B0B] border-[#D4AF37]/30 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img 
                    src={selectedRecipe.image_url} 
                    alt={selectedRecipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
                </div>
                <DialogTitle className="text-3xl text-[#D4AF37]">{selectedRecipe.title}</DialogTitle>
                <DialogDescription className="text-gray-300 text-base">
                  {selectedRecipe.description}
                </DialogDescription>
                <div className="grid grid-cols-4 gap-4 pt-4">
                  <div className="text-center p-3 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30">
                    <div className="text-2xl font-bold text-[#D4AF37]">{selectedRecipe.calories}</div>
                    <div className="text-xs text-gray-400">Calorias</div>
                  </div>
                  <div className="text-center p-3 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30">
                    <div className="text-2xl font-bold text-[#D4AF37]">{selectedRecipe.protein}g</div>
                    <div className="text-xs text-gray-400">Proteínas</div>
                  </div>
                  <div className="text-center p-3 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30">
                    <div className="text-2xl font-bold text-[#D4AF37]">{selectedRecipe.carbs}g</div>
                    <div className="text-xs text-gray-400">Carboidratos</div>
                  </div>
                  <div className="text-center p-3 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30">
                    <div className="text-2xl font-bold text-[#D4AF37]">{selectedRecipe.fats}g</div>
                    <div className="text-xs text-gray-400">Gorduras</div>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div>
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-3">Ingredientes</h4>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-3">Modo de Preparo</h4>
                  <ol className="space-y-3">
                    {selectedRecipe.instructions.map((instruction: string, i: number) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#D4AF37] text-black rounded-full flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        <span className="flex-1 pt-0.5">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#D4AF37] font-bold">
                Adicionar ao Meu Plano
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-[#D4AF37]/20 py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-[#D4AF37]" />
            <span className="font-bold text-white">
              <span className="text-[#D4AF37]">King</span> Fitness
            </span>
          </div>
          <p className="text-sm">
            Transforme seu corpo e mente. Você é o rei do seu próprio corpo! 👑
          </p>
          <p className="text-xs mt-2">
            © 2024 King Fitness. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
