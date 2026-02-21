// ========================================
// INTELIGÊNCIA ARTIFICIAL NA ADVOCACIA
// Script de Interatividade com Exercícios
// ========================================

// Dados dos Exercícios
const exercisesData = {
    exercise1: {
        title: "Prompt Engineering Básico",
        description: "Aprenda a criar prompts efetivos para IA",
        content: `
            <h3>Objetivo</h3>
            <p>Desenvolver habilidades de comunicação com sistemas de IA através de prompts bem estruturados.</p>
            
            <h3>Instruções</h3>
            <ul>
                <li>Identifique o contexto do seu problema jurídico</li>
                <li>Defina claramente o que você quer que a IA faça</li>
                <li>Forneça exemplos ou contexto relevante</li>
                <li>Especifique o formato desejado da resposta</li>
                <li>Teste e refine seu prompt</li>
            </ul>
            
            <h3>Exemplo Prático</h3>
            <p><strong>Prompt Fraco:</strong> "Analise este contrato"</p>
            <p><strong>Prompt Forte:</strong> "Você é um advogado especializado em direito contratual. Analise o contrato de prestação de serviços anexado e identifique: 1) Cláusulas de rescisão, 2) Obrigações de cada parte, 3) Possíveis riscos legais. Forneça a análise em formato de lista com explicações concisas."</p>
            
            <h3>Desafio</h3>
            <p>Crie um prompt para uma IA analisar um contrato de sua prática jurídica. Teste com diferentes versões e observe como a qualidade da resposta melhora.</p>
        `
    },
    exercise2: {
        title: "Análise de Documentos com IA",
        description: "Use IA para extrair informações de documentos jurídicos",
        content: `
            <h3>Objetivo</h3>
            <p>Dominar técnicas de extração de informações usando IA em documentos jurídicos.</p>
            
            <h3>Instruções</h3>
            <ul>
                <li>Selecione um documento jurídico (contrato, parecer, petição)</li>
                <li>Identifique as informações-chave que precisa extrair</li>
                <li>Crie um prompt específico para essa extração</li>
                <li>Compare o resultado da IA com sua análise manual</li>
                <li>Refine o prompt para melhorar a precisão</li>
            </ul>
            
            <h3>Informações a Extrair</h3>
            <ul>
                <li>Partes envolvidas</li>
                <li>Datas importantes</li>
                <li>Obrigações principais</li>
                <li>Cláusulas especiais</li>
                <li>Riscos identificados</li>
            </ul>
            
            <h3>Dica</h3>
            <p>Quanto mais específico for seu prompt, melhor será a extração de informações. Use templates para padronizar suas solicitações.</p>
        `
    },
    exercise3: {
        title: "Geração de Documentos Jurídicos",
        description: "Crie documentos jurídicos com auxílio de IA",
        content: `
            <h3>Objetivo</h3>
            <p>Aprender a usar IA como ferramenta auxiliar na redação de documentos jurídicos.</p>
            
            <h3>Instruções</h3>
            <ul>
                <li>Escolha um tipo de documento (contrato, petição, parecer)</li>
                <li>Prepare um briefing com os pontos principais</li>
                <li>Use IA para gerar um rascunho inicial</li>
                <li>Revise e adapte o documento gerado</li>
                <li>Adicione sua expertise jurídica</li>
                <li>Finalize com revisão completa</li>
            </ul>
            
            <h3>Exemplo de Briefing</h3>
            <p><strong>Tipo:</strong> Contrato de Prestação de Serviços</p>
            <p><strong>Partes:</strong> Advogado e Cliente</p>
            <p><strong>Serviços:</strong> Consultoria jurídica mensal</p>
            <p><strong>Valor:</strong> R$ 2.000/mês</p>
            <p><strong>Duração:</strong> 12 meses</p>
            
            <h3>Importante</h3>
            <p>A IA é uma ferramenta auxiliar. Sempre revise e adapte os documentos gerados conforme sua experiência e responsabilidade profissional.</p>
        `
    },
    exercise4: {
        title: "Pesquisa Jurisprudencial com IA",
        description: "Otimize sua pesquisa jurisprudencial usando IA",
        content: `
            <h3>Objetivo</h3>
            <p>Acelerar e melhorar a qualidade da pesquisa jurisprudencial com auxílio de IA.</p>
            
            <h3>Instruções</h3>
            <ul>
                <li>Defina sua questão jurídica com clareza</li>
                <li>Identifique os pontos-chave a pesquisar</li>
                <li>Use IA para sintetizar jurisprudência</li>
                <li>Organize os resultados por relevância</li>
                <li>Valide os resultados em bases oficiais</li>
                <li>Crie um banco de dados com os achados</li>
            </ul>
            
            <h3>Exemplo de Questão</h3>
            <p>"Qual é o entendimento atual dos tribunais sobre indenização por dano moral em casos de descumprimento contratual?"</p>
            
            <h3>Vantagens da IA</h3>
            <ul>
                <li>Análise rápida de múltiplas decisões</li>
                <li>Identificação de tendências jurisprudenciais</li>
                <li>Resumo automático de decisões</li>
                <li>Comparação entre diferentes tribunais</li>
            </ul>
            
            <h3>Ressalva</h3>
            <p>Sempre valide as informações fornecidas pela IA em bases jurídicas oficiais (STF, STJ, TJ, etc).</p>
        `
    }
};

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

// Mostrar/ocultar botão de voltar ao topo
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Voltar ao topo ao clicar
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de cards ao entrar na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards
document.querySelectorAll('.module-card, .topic-card, .exercise-item').forEach(card => {
    observer.observe(card);
});

// Interatividade dos botões com ripple effect
document.querySelectorAll('.cta-button, .module-button, .exercise-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Criar efeito de ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Funcionalidade dos Exercícios com Modal
document.querySelectorAll('.exercise-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const exerciseKey = this.getAttribute('data-exercise');
        openExerciseModal(exerciseKey);
    });
});

// Abrir Modal do Exercício
function openExerciseModal(exerciseKey) {
    const exercise = exercisesData[exerciseKey];
    if (!exercise) return;

    // Criar modal dinamicamente
    let modal = document.getElementById('exerciseModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'exerciseModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    // Preencher conteúdo do modal
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${exercise.title}</h2>
                <button class="close-button" onclick="closeExerciseModal()">&times;</button>
            </div>
            <div class="modal-body">
                ${exercise.content}
            </div>
            <div class="modal-footer">
                <button class="modal-button modal-button-cancel" onclick="closeExerciseModal()">Fechar</button>
                <button class="modal-button" onclick="startExercise('${exerciseKey}')">Iniciar Exercício</button>
            </div>
        </div>
    `;

    // Mostrar modal
    modal.style.display = 'block';

    // Fechar ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeExerciseModal();
        }
    });
}

// Fechar Modal
function closeExerciseModal() {
    const modal = document.getElementById('exerciseModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Iniciar Exercício
function startExercise(exerciseKey) {
    const exercise = exercisesData[exerciseKey];
    alert(`Exercício: ${exercise.title}\n\n${exercise.description}\n\nBom trabalho! 🎓`);
    closeExerciseModal();
}

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeExerciseModal();
    }
});

// Adicionar estilo de ripple dinamicamente
const style = document.createElement('style');
style.textContent = `
    .cta-button, .module-button, .exercise-button {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado com sucesso!');
    console.log('Exercícios disponíveis:', Object.keys(exercisesData));
});


// ========================================
// FUNCIONALIDADE DE PROMPTS
// ========================================

// Filtrar prompts por categoria
document.querySelectorAll('.prompt-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Remover classe active de todos os botoes
        document.querySelectorAll('.prompt-tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Mostrar/ocultar cards de prompts
        document.querySelectorAll('.prompt-card').forEach(card => {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Copiar prompt para clipboard
document.querySelectorAll('.copy-prompt-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const promptText = this.getAttribute('data-prompt');
        
        // Copiar para clipboard
        navigator.clipboard.writeText(promptText).then(() => {
            // Feedback visual
            const originalText = this.textContent;
            this.textContent = '✓ Copiado!';
            this.classList.add('copied');
            
            // Restaurar texto original apos 2 segundos
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Erro ao copiar:', err);
            alert('Erro ao copiar o prompt. Tente novamente.');
        });
    });
});

// Atualizar console ao carregar
console.log('Funcionalidade de prompts ativada!');


// ========================================
// GERADOR DE PROMPTS INTERATIVO
// ========================================

// Templates de prompts por tipo
const promptTemplates = {
    analise: {
        base: "Você é um {role}. Analise o seguinte:\n\n{context}\n\nRequisitos:\n{requirements}\n\nForneça a resposta em formato de {format}.",
        defaultRequirements: "1. Identifique pontos principais\n2. Aponte riscos potenciais\n3. Sugira melhorias"
    },
    geracao: {
        base: "Você é um {role}. Crie um documento com base nas seguintes informações:\n\n{context}\n\nRequisitos:\n{requirements}\n\nO documento deve ser {tone} e apresentado em formato de {format}.",
        defaultRequirements: "1. Inclua todas as cláusulas essenciais\n2. Seja claro e profissional\n3. Considere riscos legais"
    },
    pesquisa: {
        base: "Você é um {role}. Pesquise e sintetize informações sobre:\n\n{context}\n\nRequisitos:\n{requirements}\n\nOrganize a resposta em formato de {format}.",
        defaultRequirements: "1. Identifique tendências principais\n2. Destaque informações recentes\n3. Aponte divergências"
    },
    revisao: {
        base: "Você é um {role}. Revise o seguinte documento:\n\n{context}\n\nRequisitos:\n{requirements}\n\nForneça feedback em formato de {format}.",
        defaultRequirements: "1. Aponte erros e inconsistências\n2. Sugira melhorias\n3. Identifique riscos"
    },
    estrategia: {
        base: "Você é um {role}. Desenvolva uma estratégia para:\n\n{context}\n\nRequisitos:\n{requirements}\n\nApresente a estratégia em formato de {format}.",
        defaultRequirements: "1. Defina objetivos claros\n2. Aponte argumentos principais\n3. Identifique riscos e mitigações"
    },
    personalizado: {
        base: "{context}\n\n{requirements}",
        defaultRequirements: ""
    }
};

const formatDescriptions = {
    lista: "lista numerada com explicações",
    tabela: "tabela estruturada",
    paragrafo: "parágrafos corridos",
    topicos: "tópicos com explicação detalhada",
    resumo: "resumo executivo conciso"
};

const toneDescriptions = {
    formal: "formal e profissional",
    tecnico: "técnico e detalhado",
    simples: "simples e direto",
    academico: "acadêmico e estruturado"
};

// Elementos do DOM
const promptTypeSelect = document.getElementById('promptType');
const promptRoleInput = document.getElementById('promptRole');
const promptContextInput = document.getElementById('promptContext');
const promptRequirementsInput = document.getElementById('promptRequirements');
const promptFormatSelect = document.getElementById('promptFormat');
const promptToneSelect = document.getElementById('promptTone');
const generateBtn = document.getElementById('generateBtn');
const promptOutput = document.getElementById('promptOutput');
const copyGeneratedBtn = document.getElementById('copyGeneratedBtn');
const testBtn = document.getElementById('testBtn');
const saveBtn = document.getElementById('saveBtn');
const savedPromptsList = document.getElementById('savedPromptsList');
const savedPromptsContainer = document.getElementById('savedPrompts');

let currentGeneratedPrompt = '';
let savedPrompts = JSON.parse(localStorage.getItem('savedPrompts')) || [];

// Atualizar requisitos padrão ao mudar tipo
promptTypeSelect.addEventListener('change', function() {
    const type = this.value;
    if (promptRequirementsInput.value === '' || promptRequirementsInput.value === promptTemplates[promptTypeSelect.value]?.defaultRequirements) {
        promptRequirementsInput.value = promptTemplates[type]?.defaultRequirements || '';
    }
});

// Gerar prompt
generateBtn.addEventListener('click', function() {
    const type = promptTypeSelect.value;
    const role = promptRoleInput.value || 'Advogado especializado';
    const context = promptContextInput.value;
    const requirements = promptRequirementsInput.value;
    const format = formatDescriptions[promptFormatSelect.value];
    const tone = toneDescriptions[promptToneSelect.value];

    if (!context.trim()) {
        alert('Por favor, preencha o campo de contexto/descrição.');
        return;
    }

    const template = promptTemplates[type];
    let generatedPrompt = template.base
        .replace('{role}', role)
        .replace('{context}', context)
        .replace('{requirements}', requirements)
        .replace('{format}', format)
        .replace('{tone}', tone);

    currentGeneratedPrompt = generatedPrompt;
    promptOutput.textContent = generatedPrompt;
    promptOutput.classList.remove('placeholder-text');

    // Scroll para o output
    promptOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Copiar prompt gerado
copyGeneratedBtn.addEventListener('click', function() {
    if (!currentGeneratedPrompt) {
        alert('Gere um prompt primeiro!');
        return;
    }

    navigator.clipboard.writeText(currentGeneratedPrompt).then(() => {
        const originalText = this.textContent;
        this.textContent = '✓ Copiado!';
        this.classList.add('copied');

        setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        alert('Erro ao copiar o prompt.');
    });
});

// Testar com IA
testBtn.addEventListener('click', function() {
    if (!currentGeneratedPrompt) {
        alert('Gere um prompt primeiro!');
        return;
    }

    alert('Para testar este prompt:\n\n1. Copie o prompt (clique em "Copiar Prompt")\n2. Acesse ChatGPT, Claude ou outra ferramenta de IA\n3. Cole o prompt e observe os resultados\n4. Ajuste conforme necessário!\n\nDica: Experimente diferentes combinações de parâmetros para melhorar os resultados.');
});

// Salvar prompt
saveBtn.addEventListener('click', function() {
    if (!currentGeneratedPrompt) {
        alert('Gere um prompt primeiro!');
        return;
    }

    const promptName = prompt('Dê um nome para este prompt:');
    if (!promptName) return;

    const savedPrompt = {
        id: Date.now(),
        name: promptName,
        content: currentGeneratedPrompt,
        type: promptTypeSelect.value,
        date: new Date().toLocaleDateString('pt-BR')
    };

    savedPrompts.push(savedPrompt);
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
    renderSavedPrompts();

    alert('Prompt salvo com sucesso!');
});

// Renderizar prompts salvos
function renderSavedPrompts() {
    if (savedPrompts.length === 0) {
        savedPromptsContainer.style.display = 'none';
        return;
    }

    savedPromptsContainer.style.display = 'block';
    savedPromptsList.innerHTML = '';

    savedPrompts.forEach(prompt => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${prompt.name}</strong>
                <br>
                <small style="color: var(--text-gray);">${prompt.type} - ${prompt.date}</small>
            </div>
            <button onclick="loadSavedPrompt(${prompt.id})">Carregar</button>
            <button onclick="deleteSavedPrompt(${prompt.id})" style="background-color: #dc3545;">Deletar</button>
        `;
        savedPromptsList.appendChild(li);
    });
}

// Carregar prompt salvo
function loadSavedPrompt(id) {
    const prompt = savedPrompts.find(p => p.id === id);
    if (prompt) {
        currentGeneratedPrompt = prompt.content;
        promptOutput.textContent = prompt.content;
        promptOutput.classList.remove('placeholder-text');
        promptOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Deletar prompt salvo
function deleteSavedPrompt(id) {
    if (confirm('Tem certeza que deseja deletar este prompt?')) {
        savedPrompts = savedPrompts.filter(p => p.id !== id);
        localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
        renderSavedPrompts();
    }
}

// Inicializar prompts salvos ao carregar
document.addEventListener('DOMContentLoaded', function() {
    renderSavedPrompts();
});
