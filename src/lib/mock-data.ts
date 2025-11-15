import { Workout, Recipe, MusicPlaylist } from './supabase';

export const mockWorkouts: Workout[] = [
  {
    id: '1',
    title: 'Treino de Peito e Tríceps',
    description: 'Treino intenso para desenvolvimento do peitoral e tríceps',
    muscle_group: 'Peito',
    level: 'intermediario',
    duration: 45,
    image_url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    exercises: [
      {
        name: 'Supino Reto',
        sets: 4,
        reps: '8-12',
        rest: 90,
        instructions: 'Deite no banco, pegue a barra com pegada média, desça controlado até o peito e empurre explosivamente'
      },
      {
        name: 'Supino Inclinado',
        sets: 3,
        reps: '10-12',
        rest: 90,
        instructions: 'No banco inclinado a 45°, execute o movimento focando na parte superior do peito'
      },
      {
        name: 'Crucifixo',
        sets: 3,
        reps: '12-15',
        rest: 60,
        instructions: 'Com halteres, abra os braços em arco, mantendo leve flexão nos cotovelos'
      },
      {
        name: 'Tríceps Testa',
        sets: 3,
        reps: '10-12',
        rest: 60,
        instructions: 'Deitado, desça a barra em direção à testa, mantendo cotovelos fixos'
      },
      {
        name: 'Tríceps Corda',
        sets: 3,
        reps: '12-15',
        rest: 60,
        instructions: 'No cabo, empurre a corda para baixo, abrindo as pontas no final do movimento'
      }
    ]
  },
  {
    id: '2',
    title: 'Treino de Costas e Bíceps',
    description: 'Desenvolvimento completo das costas e bíceps',
    muscle_group: 'Costas',
    level: 'intermediario',
    duration: 50,
    image_url: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=600&fit=crop',
    exercises: [
      {
        name: 'Barra Fixa',
        sets: 4,
        reps: '8-12',
        rest: 90,
        instructions: 'Pegada pronada, puxe o corpo até o queixo passar a barra'
      },
      {
        name: 'Remada Curvada',
        sets: 4,
        reps: '8-12',
        rest: 90,
        instructions: 'Inclinado para frente, puxe a barra em direção ao abdômen'
      },
      {
        name: 'Pulldown',
        sets: 3,
        reps: '10-12',
        rest: 60,
        instructions: 'Sentado, puxe a barra até a altura do peito'
      },
      {
        name: 'Rosca Direta',
        sets: 3,
        reps: '10-12',
        rest: 60,
        instructions: 'Em pé, flexione os cotovelos levando a barra até os ombros'
      },
      {
        name: 'Rosca Martelo',
        sets: 3,
        reps: '12-15',
        rest: 60,
        instructions: 'Com halteres em pegada neutra, execute a flexão dos cotovelos'
      }
    ]
  },
  {
    id: '3',
    title: 'Treino de Pernas Completo',
    description: 'Treino intenso para quadríceps, posterior e glúteos',
    muscle_group: 'Pernas',
    level: 'avancado',
    duration: 60,
    image_url: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&h=600&fit=crop',
    exercises: [
      {
        name: 'Agachamento Livre',
        sets: 4,
        reps: '8-12',
        rest: 120,
        instructions: 'Com barra nas costas, desça até paralelo ao chão mantendo costas retas'
      },
      {
        name: 'Leg Press 45°',
        sets: 4,
        reps: '12-15',
        rest: 90,
        instructions: 'No aparelho, empurre a plataforma com os pés na largura dos ombros'
      },
      {
        name: 'Cadeira Extensora',
        sets: 3,
        reps: '12-15',
        rest: 60,
        instructions: 'Sentado, estenda as pernas completamente, contraindo o quadríceps'
      },
      {
        name: 'Mesa Flexora',
        sets: 3,
        reps: '12-15',
        rest: 60,
        instructions: 'Deitado, flexione as pernas em direção aos glúteos'
      },
      {
        name: 'Panturrilha em Pé',
        sets: 4,
        reps: '15-20',
        rest: 45,
        instructions: 'Suba na ponta dos pés, contraindo a panturrilha no topo'
      }
    ]
  },
  {
    id: '4',
    title: 'Treino de Ombros e Abdômen',
    description: 'Desenvolvimento dos deltoides e core',
    muscle_group: 'Ombros',
    level: 'intermediario',
    duration: 40,
    image_url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',
    exercises: [
      {
        name: 'Desenvolvimento com Barra',
        sets: 4,
        reps: '8-12',
        rest: 90,
        instructions: 'Sentado, empurre a barra acima da cabeça até extensão completa'
      },
      {
        name: 'Elevação Lateral',
        sets: 3,
        reps: '12-15',
        rest: 60,
        instructions: 'Com halteres, eleve os braços lateralmente até a altura dos ombros'
      },
      {
        name: 'Elevação Frontal',
        sets: 3,
        reps: '12-15',
        rest: 60,
        instructions: 'Eleve os halteres à frente até a altura dos ombros'
      },
      {
        name: 'Crucifixo Inverso',
        sets: 3,
        reps: '12-15',
        rest: 60,
        instructions: 'Inclinado, abra os braços lateralmente trabalhando o deltoide posterior'
      },
      {
        name: 'Abdominal Completo',
        sets: 4,
        reps: '20-25',
        rest: 45,
        instructions: 'Deitado, leve joelhos e tronco um em direção ao outro'
      }
    ]
  },
  {
    id: '5',
    title: 'Treino HIIT Iniciante',
    description: 'Treino intervalado de alta intensidade para queima de gordura',
    muscle_group: 'Corpo Todo',
    level: 'iniciante',
    duration: 20,
    image_url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    exercises: [
      {
        name: 'Polichinelos',
        sets: 3,
        reps: '30 segundos',
        rest: 30,
        instructions: 'Salte abrindo e fechando pernas e braços simultaneamente'
      },
      {
        name: 'Burpees',
        sets: 3,
        reps: '30 segundos',
        rest: 30,
        instructions: 'Agache, apoie as mãos, estenda as pernas, volte e salte'
      },
      {
        name: 'Mountain Climbers',
        sets: 3,
        reps: '30 segundos',
        rest: 30,
        instructions: 'Em prancha, alterne joelhos em direção ao peito rapidamente'
      },
      {
        name: 'Agachamento Jump',
        sets: 3,
        reps: '30 segundos',
        rest: 30,
        instructions: 'Agache e salte explosivamente ao subir'
      }
    ]
  }
];

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Omelete Proteica',
    description: 'Café da manhã rico em proteínas para começar o dia',
    calories: 320,
    protein: 28,
    carbs: 8,
    fats: 20,
    meal_type: 'cafe',
    image_url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop',
    ingredients: [
      '3 ovos inteiros',
      '2 claras',
      '50g de queijo cottage',
      'Tomate picado',
      'Cebola picada',
      'Sal e pimenta a gosto',
      'Azeite para untar'
    ],
    instructions: [
      'Bata os ovos e claras em uma tigela',
      'Adicione o queijo cottage e temperos',
      'Aqueça uma frigideira com azeite',
      'Despeje a mistura e adicione tomate e cebola',
      'Cozinhe em fogo baixo até firmar',
      'Dobre ao meio e sirva quente'
    ]
  },
  {
    id: '2',
    title: 'Frango Grelhado com Batata Doce',
    description: 'Almoço balanceado para ganho de massa muscular',
    calories: 520,
    protein: 45,
    carbs: 52,
    fats: 12,
    meal_type: 'almoco',
    image_url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=600&fit=crop',
    ingredients: [
      '200g de peito de frango',
      '200g de batata doce',
      'Brócolis a gosto',
      'Alho e cebola',
      'Azeite de oliva',
      'Temperos naturais'
    ],
    instructions: [
      'Tempere o frango com alho, sal e pimenta',
      'Grelhe o frango até dourar dos dois lados',
      'Cozinhe a batata doce no vapor ou assada',
      'Refogue o brócolis com alho',
      'Monte o prato e finalize com azeite'
    ]
  },
  {
    id: '3',
    title: 'Salmão com Quinoa',
    description: 'Jantar leve e nutritivo rico em ômega-3',
    calories: 480,
    protein: 38,
    carbs: 42,
    fats: 18,
    meal_type: 'jantar',
    image_url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop',
    ingredients: [
      '180g de salmão',
      '100g de quinoa',
      'Aspargos',
      'Limão',
      'Azeite',
      'Ervas finas'
    ],
    instructions: [
      'Cozinhe a quinoa conforme instruções da embalagem',
      'Tempere o salmão com limão e ervas',
      'Grelhe o salmão por 4-5 minutos de cada lado',
      'Grelhe os aspargos rapidamente',
      'Sirva tudo junto com um fio de azeite'
    ]
  },
  {
    id: '4',
    title: 'Smoothie Pós-Treino',
    description: 'Lanche perfeito para recuperação muscular',
    calories: 280,
    protein: 25,
    carbs: 35,
    fats: 6,
    meal_type: 'lanche',
    image_url: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=600&fit=crop',
    ingredients: [
      '1 banana',
      '1 scoop de whey protein',
      '200ml de leite desnatado',
      '1 colher de pasta de amendoim',
      'Gelo a gosto',
      'Canela'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Adicione gelo se desejar mais gelado',
      'Sirva imediatamente após o treino'
    ]
  },
  {
    id: '5',
    title: 'Salada de Atum Fitness',
    description: 'Almoço leve e proteico',
    calories: 350,
    protein: 32,
    carbs: 28,
    fats: 14,
    meal_type: 'almoco',
    image_url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    ingredients: [
      '1 lata de atum em água',
      'Alface',
      'Tomate cereja',
      'Pepino',
      '50g de grão de bico',
      'Azeite e limão',
      'Sal e pimenta'
    ],
    instructions: [
      'Lave e corte todos os vegetais',
      'Escorra o atum',
      'Monte a salada em uma tigela',
      'Tempere com azeite, limão, sal e pimenta',
      'Misture bem e sirva'
    ]
  }
];

export const mockPlaylists: MusicPlaylist[] = [
  {
    id: '1',
    title: 'Treino Pesado 💪',
    description: 'As melhores músicas para treinos intensos',
    is_public: true,
    created_by: 'system',
    songs: [
      { title: 'Eye of the Tiger', artist: 'Survivor', duration: 246, url: '#' },
      { title: 'Lose Yourself', artist: 'Eminem', duration: 326, url: '#' },
      { title: 'Till I Collapse', artist: 'Eminem', duration: 297, url: '#' },
      { title: 'Stronger', artist: 'Kanye West', duration: 311, url: '#' },
      { title: 'Remember the Name', artist: 'Fort Minor', duration: 230, url: '#' }
    ]
  },
  {
    id: '2',
    title: 'Cardio Motivação 🔥',
    description: 'Ritmo acelerado para cardio',
    is_public: true,
    created_by: 'system',
    songs: [
      { title: 'Uptown Funk', artist: 'Bruno Mars', duration: 269, url: '#' },
      { title: 'Can\'t Stop', artist: 'Red Hot Chili Peppers', duration: 269, url: '#' },
      { title: 'Thunderstruck', artist: 'AC/DC', duration: 292, url: '#' },
      { title: 'Pump It', artist: 'Black Eyed Peas', duration: 213, url: '#' },
      { title: 'Work', artist: 'Rihanna', duration: 219, url: '#' }
    ]
  },
  {
    id: '3',
    title: 'Foco Total 🎯',
    description: 'Para treinos que exigem concentração',
    is_public: true,
    created_by: 'system',
    songs: [
      { title: 'In the End', artist: 'Linkin Park', duration: 216, url: '#' },
      { title: 'Numb', artist: 'Linkin Park', duration: 185, url: '#' },
      { title: 'Radioactive', artist: 'Imagine Dragons', duration: 187, url: '#' },
      { title: 'Centuries', artist: 'Fall Out Boy', duration: 233, url: '#' },
      { title: 'Hall of Fame', artist: 'The Script', duration: 201, url: '#' }
    ]
  }
];

export const plans = [
  {
    id: 'basico',
    name: 'Plano Básico',
    price: 19.90,
    features: [
      'Acesso a rotinas de treino',
      'Dicas de alimentação',
      'Reconhecimento de alimentos',
      'Suporte por email'
    ]
  },
  {
    id: 'premium',
    name: 'Plano Premium',
    price: 39.90,
    popular: true,
    features: [
      'Tudo do Plano Básico',
      'Playlist motivacional',
      'Personal trainer online',
      'Planos personalizados',
      'Suporte prioritário'
    ]
  },
  {
    id: 'vip',
    name: 'Plano VIP',
    price: 69.90,
    features: [
      'Tudo do Plano Premium',
      'Consultas quinzenais',
      'Receitas exclusivas',
      'Dicas nutricionais mensais',
      'Acompanhamento 24/7',
      'Grupo VIP exclusivo'
    ]
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: 'Qual é o seu nível de condicionamento físico atual?',
    options: [
      { value: 'iniciante', label: 'Iniciante - Pouca ou nenhuma experiência' },
      { value: 'intermediario', label: 'Intermediário - Treino regularmente' },
      { value: 'avancado', label: 'Avançado - Treino há mais de 2 anos' }
    ]
  },
  {
    id: 2,
    question: 'Qual é o seu principal objetivo?',
    options: [
      { value: 'perder_peso', label: 'Perder peso e definir' },
      { value: 'ganhar_massa', label: 'Ganhar massa muscular' },
      { value: 'manter_forma', label: 'Manter a forma e saúde' },
      { value: 'performance', label: 'Melhorar performance atlética' }
    ]
  },
  {
    id: 3,
    question: 'Quantos dias por semana você pode treinar?',
    options: [
      { value: '2-3', label: '2 a 3 dias' },
      { value: '4-5', label: '4 a 5 dias' },
      { value: '6-7', label: '6 a 7 dias' }
    ]
  },
  {
    id: 4,
    question: 'Você tem alguma restrição alimentar?',
    options: [
      { value: 'nenhuma', label: 'Nenhuma restrição' },
      { value: 'vegetariano', label: 'Vegetariano' },
      { value: 'vegano', label: 'Vegano' },
      { value: 'intolerancia', label: 'Intolerância (lactose, glúten, etc)' }
    ]
  }
];
