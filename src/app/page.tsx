'use client'

import { useState } from 'react'
import { Activity, Target, Zap, Trophy, Users, TrendingUp, Play, Award, MessageCircle, Share2, ChevronRight, Dumbbell, Brain, Timer, MapPin, Heart, Flame, Home, Shield, Sparkles, Footprints, User, Settings, LogOut, Calendar, BarChart3, Bell, Edit2, Mail, Phone, MapPinned, Cake, Ruler, Weight, Save, X } from 'lucide-react'

export default function RunSmartApp() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isEditMode, setIsEditMode] = useState(false)

  // Estados para os campos editáveis
  const [editableData, setEditableData] = useState({
    name: 'João Dias',
    email: 'joao.dias@email.com',
    phone: '+55 (11) 98765-4321',
    location: 'São Paulo, SP - Brasil',
    birthDate: '15 de Março de 1990',
    gender: 'Masculino',
    activityLevel: 'Muito Ativo',
    height: '1,78',
    weight: '72',
    restingHR: '52',
    maxHR: '186',
    mainGoal: 'Melhorar Performance',
    goalDetail: '10km em 45 minutos',
    trainingFrequency: '4-5 vezes por semana',
    preferredTime: 'Manhã (06:00 - 08:00)',
    preferredLocation: 'Parque Ibirapuera'
  })

  // Função para iniciar treino - vai para tela de monitoramento
  const handleStartTraining = () => {
    setActiveTab('monitoring')
  }

  // Função para abrir perfil
  const handleOpenProfile = () => {
    setActiveTab('profile')
  }

  // Função para abrir informações pessoais
  const handleOpenPersonalInfo = () => {
    setActiveTab('personal-info')
  }

  // Função para ativar modo de edição
  const handleEditMode = () => {
    setIsEditMode(true)
  }

  // Função para salvar alterações
  const handleSaveChanges = () => {
    setIsEditMode(false)
    // Aqui você pode adicionar lógica para salvar no backend/database
    console.log('Dados salvos:', editableData)
  }

  // Função para cancelar edição
  const handleCancelEdit = () => {
    setIsEditMode(false)
    // Restaurar dados originais se necessário
  }

  // Função para atualizar campos
  const handleInputChange = (field: string, value: string) => {
    setEditableData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D0D0D]" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Run<span className="text-[#00FF9D]">Smart</span>
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#FF6B00]/10 rounded-full border border-[#FF6B00]/20">
                <Flame className="w-4 h-4 text-[#FF6B00]" />
                <span className="text-xs sm:text-sm font-semibold text-[#FF6B00]">12 dias</span>
              </div>
              <button 
                onClick={handleOpenProfile}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#00FF9D]/20 to-[#00CC7D]/20 rounded-full border-2 border-[#00FF9D] flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <span className="text-xs sm:text-sm font-bold">JD</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20 pb-24 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          
          {/* Personal Info */}
          {activeTab === 'personal-info' && (
            <div className="space-y-6 sm:space-y-8">
              {/* Header com botão voltar */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Informações <span className="text-[#00FF9D]">Pessoais</span>
                  </h2>
                  <p className="text-sm sm:text-base text-white/60 mt-2">
                    {isEditMode ? 'Editando seus dados pessoais' : 'Gerencie seus dados pessoais'}
                  </p>
                </div>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 text-sm"
                >
                  Voltar
                </button>
              </div>

              {/* Card Principal com Foto e Botão Editar */}
              <div className="bg-gradient-to-br from-[#00FF9D]/10 to-[#00CC7D]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#00FF9D]/20">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] rounded-full border-4 border-[#00FF9D]/30 flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl font-bold text-[#0D0D0D]">JD</span>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    {isEditMode ? (
                      <input
                        type="text"
                        value={editableData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="text-2xl sm:text-3xl font-bold mb-2 bg-white/10 px-4 py-2 rounded-xl border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      />
                    ) : (
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {editableData.name}
                      </h3>
                    )}
                    <p className="text-sm sm:text-base text-white/60 mb-4">Corredor Avançado • Nível 24</p>
                    {!isEditMode && (
                      <button 
                        onClick={handleEditMode}
                        className="px-6 py-3 bg-[#00FF9D] hover:bg-[#00CC7D] text-[#0D0D0D] font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto sm:mx-0"
                      >
                        <Edit2 className="w-4 h-4" />
                        Editar Informações
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Informações Pessoais Detalhadas */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Dados de Contato */}
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Dados de Contato
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Mail className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">E-mail</p>
                        {isEditMode ? (
                          <input
                            type="email"
                            value={editableData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                          />
                        ) : (
                          <p className="text-sm sm:text-base font-medium truncate">{editableData.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Phone className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Telefone</p>
                        {isEditMode ? (
                          <input
                            type="tel"
                            value={editableData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                          />
                        ) : (
                          <p className="text-sm sm:text-base font-medium">{editableData.phone}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <MapPinned className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Localização</p>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editableData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                          />
                        ) : (
                          <p className="text-sm sm:text-base font-medium">{editableData.location}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dados Pessoais */}
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Dados Pessoais
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Cake className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Data de Nascimento</p>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editableData.birthDate}
                            onChange={(e) => handleInputChange('birthDate', e.target.value)}
                            className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                          />
                        ) : (
                          <>
                            <p className="text-sm sm:text-base font-medium">{editableData.birthDate}</p>
                            <p className="text-xs text-white/40 mt-1">34 anos</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <User className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Gênero</p>
                        {isEditMode ? (
                          <select
                            value={editableData.gender}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                            className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                          >
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                          </select>
                        ) : (
                          <p className="text-sm sm:text-base font-medium">{editableData.gender}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Activity className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Nível de Atividade</p>
                        {isEditMode ? (
                          <select
                            value={editableData.activityLevel}
                            onChange={(e) => handleInputChange('activityLevel', e.target.value)}
                            className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                          >
                            <option value="Sedentário">Sedentário</option>
                            <option value="Levemente Ativo">Levemente Ativo</option>
                            <option value="Moderadamente Ativo">Moderadamente Ativo</option>
                            <option value="Muito Ativo">Muito Ativo</option>
                            <option value="Extremamente Ativo">Extremamente Ativo</option>
                          </select>
                        ) : (
                          <>
                            <p className="text-sm sm:text-base font-medium">{editableData.activityLevel}</p>
                            <p className="text-xs text-white/40 mt-1">4-5 treinos por semana</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dados Físicos */}
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Dados Físicos
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Ruler className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Altura</p>
                        {isEditMode ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editableData.height}
                              onChange={(e) => handleInputChange('height', e.target.value)}
                              className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                            />
                            <span className="text-sm text-white/60">m</span>
                          </div>
                        ) : (
                          <p className="text-sm sm:text-base font-medium">{editableData.height} m</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Weight className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Peso</p>
                        {isEditMode ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editableData.weight}
                              onChange={(e) => handleInputChange('weight', e.target.value)}
                              className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                            />
                            <span className="text-sm text-white/60">kg</span>
                          </div>
                        ) : (
                          <p className="text-sm sm:text-base font-medium">{editableData.weight} kg</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Heart className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">FC Repouso</p>
                        {isEditMode ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editableData.restingHR}
                              onChange={(e) => handleInputChange('restingHR', e.target.value)}
                              className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                            />
                            <span className="text-sm text-white/60">bpm</span>
                          </div>
                        ) : (
                          <>
                            <p className="text-sm sm:text-base font-medium">{editableData.restingHR} bpm</p>
                            <p className="text-xs text-white/40 mt-1">Excelente condição</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Zap className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">FC Máxima</p>
                        {isEditMode ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editableData.maxHR}
                              onChange={(e) => handleInputChange('maxHR', e.target.value)}
                              className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                            />
                            <span className="text-sm text-white/60">bpm</span>
                          </div>
                        ) : (
                          <>
                            <p className="text-sm sm:text-base font-medium">{editableData.maxHR} bpm</p>
                            <p className="text-xs text-white/40 mt-1">Calculado: 220 - idade</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objetivos e Preferências */}
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Objetivos e Preferências
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Target className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Objetivo Principal</p>
                        {isEditMode ? (
                          <>
                            <input
                              type="text"
                              value={editableData.mainGoal}
                              onChange={(e) => handleInputChange('mainGoal', e.target.value)}
                              className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full mb-2"
                            />
                            <input
                              type="text"
                              value={editableData.goalDetail}
                              onChange={(e) => handleInputChange('goalDetail', e.target.value)}
                              className="text-xs bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                            />
                          </>
                        ) : (
                          <>
                            <p className="text-sm sm:text-base font-medium">{editableData.mainGoal}</p>
                            <p className="text-xs text-white/40 mt-1">{editableData.goalDetail}</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Calendar className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Frequência de Treino</p>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editableData.trainingFrequency}
                            onChange={(e) => handleInputChange('trainingFrequency', e.target.value)}
                            className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                          />
                        ) : (
                          <p className="text-sm sm:text-base font-medium">{editableData.trainingFrequency}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <Timer className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Horário Preferido</p>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editableData.preferredTime}
                            onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                            className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                          />
                        ) : (
                          <p className="text-sm sm:text-base font-medium">{editableData.preferredTime}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                      <MapPin className="w-5 h-5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 mb-1">Local Preferido</p>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editableData.preferredLocation}
                            onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
                            className="text-sm sm:text-base font-medium bg-white/10 px-3 py-2 rounded-lg border border-[#00FF9D]/30 focus:border-[#00FF9D] outline-none w-full"
                          />
                        ) : (
                          <p className="text-sm sm:text-base font-medium">{editableData.preferredLocation}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Histórico de Corrida (NÃO EDITÁVEL) */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Histórico de Corrida
                  </h3>
                  <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/60">
                    Somente leitura
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="text-xs text-white/60 mb-2">Experiência</p>
                    <p className="text-2xl font-bold text-[#00FF9D] mb-1">3 anos</p>
                    <p className="text-xs text-white/40">Desde 2021</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="text-xs text-white/60 mb-2">Total de Corridas</p>
                    <p className="text-2xl font-bold text-[#00FF9D] mb-1">142</p>
                    <p className="text-xs text-white/40">Atividades registradas</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="text-xs text-white/60 mb-2">Distância Total</p>
                    <p className="text-2xl font-bold text-[#00FF9D] mb-1">1.248 km</p>
                    <p className="text-xs text-white/40">Acumulado</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="text-xs text-white/60 mb-2">Melhor Pace</p>
                    <p className="text-2xl font-bold text-[#00FF9D] mb-1">4:27</p>
                    <p className="text-xs text-white/40">Por quilômetro</p>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex justify-center gap-4">
                {isEditMode ? (
                  <>
                    <button 
                      onClick={handleCancelEdit}
                      className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                    >
                      <X className="w-5 h-5" />
                      Cancelar
                    </button>
                    <button 
                      onClick={handleSaveChanges}
                      className="px-8 py-4 bg-[#00FF9D] hover:bg-[#00CC7D] text-[#0D0D0D] font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                    >
                      <Save className="w-5 h-5" />
                      Salvar Alterações
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={handleEditMode}
                    className="px-8 py-4 bg-[#00FF9D] hover:bg-[#00CC7D] text-[#0D0D0D] font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  >
                    <Edit2 className="w-5 h-5" />
                    Editar Todas as Informações
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Profile */}
          {activeTab === 'profile' && (
            <div className="space-y-6 sm:space-y-8">
              {/* Profile Header */}
              <div className="bg-gradient-to-br from-[#00FF9D]/10 to-[#00CC7D]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#00FF9D]/20">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] rounded-full border-4 border-[#00FF9D]/30 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-bold text-[#0D0D0D]">JD</span>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      João Dias
                    </h2>
                    <p className="text-sm sm:text-base text-white/60 mb-3">joao.dias@email.com</p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="px-3 py-1 bg-[#00FF9D]/20 text-[#00FF9D] rounded-full text-xs sm:text-sm font-semibold">
                        Nível 24
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                        Corredor Avançado
                      </span>
                    </div>
                  </div>
                  <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 text-sm sm:text-base">
                    Editar Perfil
                  </button>
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl sm:rounded-2xl p-4 border border-white/10">
                  <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF9D] mb-2" />
                  <p className="text-xs sm:text-sm text-white/60 mb-1">Total de Corridas</p>
                  <p className="text-xl sm:text-2xl font-bold">142</p>
                </div>
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl sm:rounded-2xl p-4 border border-white/10">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF9D] mb-2" />
                  <p className="text-xs sm:text-sm text-white/60 mb-1">Distância Total</p>
                  <p className="text-xl sm:text-2xl font-bold">1,248 km</p>
                </div>
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl sm:rounded-2xl p-4 border border-white/10">
                  <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF9D] mb-2" />
                  <p className="text-xs sm:text-sm text-white/60 mb-1">Conquistas</p>
                  <p className="text-xl sm:text-2xl font-bold">28</p>
                </div>
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl sm:rounded-2xl p-4 border border-white/10">
                  <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF9D] mb-2" />
                  <p className="text-xs sm:text-sm text-white/60 mb-1">Sequência Atual</p>
                  <p className="text-xl sm:text-2xl font-bold">12 dias</p>
                </div>
              </div>

              {/* Personal Records */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Recordes Pessoais
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { distance: '5K', time: '22:15', pace: '4:27 /km', date: '15 Mar 2024' },
                    { distance: '10K', time: '47:32', pace: '4:45 /km', date: '22 Fev 2024' },
                    { distance: 'Meia Maratona', time: '1:52:18', pace: '5:18 /km', date: '10 Jan 2024' },
                    { distance: 'Maratona', time: '-', pace: '-', date: 'Em breve' },
                  ].map((record, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-base sm:text-lg font-semibold text-[#00FF9D]">{record.distance}</h4>
                        <Trophy className="w-5 h-5 text-[#00FF9D]/60" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Tempo</span>
                          <span className="font-semibold">{record.time}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Pace</span>
                          <span className="font-semibold">{record.pace}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-white/40">
                          <span>Data</span>
                          <span>{record.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Metas Ativas
                </h3>
                <div className="space-y-4">
                  {[
                    { goal: 'Correr 10km em 45 minutos', progress: 78, current: '47:32', target: '45:00' },
                    { goal: 'Completar 200km este mês', progress: 62, current: '124 km', target: '200 km' },
                    { goal: 'Treinar 5x por semana', progress: 85, current: '17/20', target: '20/20' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm sm:text-base font-semibold">{item.goal}</h4>
                        <span className="text-xs sm:text-sm text-[#00FF9D] font-semibold">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-2">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00FF9D] to-[#00CC7D] rounded-full transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span>{item.current}</span>
                        <span>{item.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Settings Menu */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Configurações
                </h3>
                <div className="space-y-2">
                  {[
                    { icon: User, label: 'Informações Pessoais', color: 'text-blue-400', onClick: handleOpenPersonalInfo },
                    { icon: Bell, label: 'Notificações', color: 'text-yellow-400', onClick: null },
                    { icon: Calendar, label: 'Plano de Treino', color: 'text-green-400', onClick: null },
                    { icon: BarChart3, label: 'Estatísticas Avançadas', color: 'text-purple-400', onClick: null },
                    { icon: Settings, label: 'Preferências', color: 'text-gray-400', onClick: null },
                    { icon: LogOut, label: 'Sair', color: 'text-red-400', onClick: null },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={item.onClick || undefined}
                      className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className="text-sm sm:text-base">{item.label}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#00FF9D] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 sm:space-y-8">
              {/* Welcome Section */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Bem-vindo de volta, <span className="text-[#00FF9D]">João</span>
                </h2>
                <p className="text-sm sm:text-base text-white/60">Você está 23% mais rápido que no mês passado 🚀</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <StatCard icon={Activity} label="Distância Total" value="142.5 km" change="+12%" />
                <StatCard icon={Timer} label="Tempo Total" value="18h 32m" change="+8%" />
                <StatCard icon={Zap} label="Pace Médio" value="5:24 /km" change="-5%" positive />
                <StatCard icon={Flame} label="Calorias" value="8,420 kcal" change="+15%" />
              </div>

              {/* Main Cards Grid */}
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Weekly Progress */}
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-[#00FF9D]/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Progresso Semanal</h3>
                    <TrendingUp className="w-5 h-5 text-[#00FF9D]" />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { day: 'Seg', distance: 8.5, target: 10 },
                      { day: 'Ter', distance: 10, target: 10 },
                      { day: 'Qua', distance: 6.2, target: 10 },
                      { day: 'Qui', distance: 12, target: 10 },
                      { day: 'Sex', distance: 9.8, target: 10 },
                      { day: 'Sáb', distance: 15, target: 15 },
                      { day: 'Dom', distance: 0, target: 5 },
                    ].map((item) => (
                      <div key={item.day} className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-white/60">{item.day}</span>
                          <span className="font-semibold">{item.distance} / {item.target} km</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#00FF9D] to-[#00CC7D] rounded-full transition-all duration-500"
                            style={{ width: `${Math.min((item.distance / item.target) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Training */}
                <div className="bg-gradient-to-br from-[#00FF9D]/10 to-[#00CC7D]/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#00FF9D]/20 hover:border-[#00FF9D]/40 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00FF9D] rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D0D0D]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Próximo Treino</h3>
                      <p className="text-xs sm:text-sm text-white/60">Hoje</p>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl">
                      <span className="text-xs sm:text-sm text-white/60">Tipo</span>
                      <span className="text-sm sm:text-base font-semibold">Intervalado 5x1000m</span>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl">
                      <span className="text-xs sm:text-sm text-white/60">Distância</span>
                      <span className="text-sm sm:text-base font-semibold">10 km</span>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl">
                      <span className="text-xs sm:text-sm text-white/60">Pace Alvo</span>
                      <span className="text-sm sm:text-base font-semibold text-[#00FF9D]">4:45 - 5:00 /km</span>
                    </div>
                    <button 
                      onClick={handleStartTraining}
                      className="w-full py-3 sm:py-4 bg-[#00FF9D] hover:bg-[#00CC7D] text-[#0D0D0D] font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                      Iniciar Treino
                    </button>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-purple-500/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Insights da IA</h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      Sua cadência melhorou 8% nas últimas 2 semanas! Continue focando em passos curtos e rápidos. 
                      Recomendo adicionar 1 treino de força por semana para prevenir lesões.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Atividades Recentes</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { title: 'Corrida Matinal', distance: '12.5 km', pace: '5:12 /km', time: '1h 05m', date: 'Hoje' },
                    { title: 'Treino Intervalado', distance: '8.0 km', pace: '4:48 /km', time: '38m', date: 'Ontem' },
                    { title: 'Long Run', distance: '21.0 km', pace: '5:45 /km', time: '2h 00m', date: '2 dias atrás' },
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00FF9D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#00FF9D]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base font-semibold truncate">{activity.title}</h4>
                          <p className="text-xs sm:text-sm text-white/60">{activity.date}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-2">
                        <p className="text-sm sm:text-base font-semibold text-[#00FF9D]">{activity.distance}</p>
                        <p className="text-xs sm:text-sm text-white/60">{activity.pace}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-[#00FF9D] transition-colors ml-2 sm:ml-4 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Monitoring */}
          {activeTab === 'monitoring' && (
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Monitoramento <span className="text-[#00FF9D]">em Tempo Real</span>
              </h2>

              {/* Live Stats */}
              <div className="bg-gradient-to-br from-[#00FF9D]/10 to-[#00CC7D]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#00FF9D]/20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <LiveStat icon={Timer} label="Tempo" value="00:42:18" />
                  <LiveStat icon={Activity} label="Distância" value="8.2 km" />
                  <LiveStat icon={Zap} label="Pace Atual" value="5:09 /km" highlight />
                  <LiveStat icon={Heart} label="BPM" value="162" />
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 h-64 sm:h-96 flex items-center justify-center">
                <div className="text-center space-y-3 sm:space-y-4">
                  <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-[#00FF9D] mx-auto" />
                  <p className="text-sm sm:text-base text-white/60">Mapa de Rota em Tempo Real</p>
                </div>
              </div>

              {/* Zones */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Zonas de Frequência</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { zone: 'Zona 1', range: '120-140 bpm', percent: 15, color: 'from-blue-500 to-blue-600' },
                      { zone: 'Zona 2', range: '140-155 bpm', percent: 45, color: 'from-green-500 to-green-600' },
                      { zone: 'Zona 3', range: '155-165 bpm', percent: 30, color: 'from-yellow-500 to-yellow-600' },
                      { zone: 'Zona 4', range: '165-175 bpm', percent: 8, color: 'from-orange-500 to-orange-600' },
                      { zone: 'Zona 5', range: '175+ bpm', percent: 2, color: 'from-red-500 to-red-600' },
                    ].map((zone) => (
                      <div key={zone.zone} className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="font-medium">{zone.zone}</span>
                          <span className="text-white/60">{zone.range} • {zone.percent}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${zone.color} rounded-full`}
                            style={{ width: `${zone.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Splits por KM</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { km: 1, time: '5:12' },
                      { km: 2, time: '5:08' },
                      { km: 3, time: '5:15' },
                      { km: 4, time: '5:10' },
                      { km: 5, time: '5:06' },
                      { km: 6, time: '5:09' },
                      { km: 7, time: '5:11' },
                      { km: 8, time: '5:09' },
                    ].map((split) => (
                      <div key={split.km} className="flex items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                        <span className="text-xs sm:text-sm text-white/60">KM {split.km}</span>
                        <span className="text-sm sm:text-base font-semibold text-[#00FF9D]">{split.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Coach */}
          {activeTab === 'ai-coach' && (
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Treinador <span className="text-[#00FF9D]">de IA</span>
              </h2>

              {/* AI Recommendation */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-purple-500/20">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Plano Semanal Otimizado</h3>
                    <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
                      Baseado no seu histórico, nível atual e objetivo de correr 10km em 45 minutos, 
                      a IA criou um plano personalizado para as próximas 8 semanas.
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm">4 treinos/semana</span>
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm">Progressão gradual</span>
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm">Prevenção de lesões</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Analysis */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Análise de Performance</h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-sm text-white/60">Cadência Média</span>
                      <span className="text-lg font-bold text-[#00FF9D]">178 spm</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-sm text-white/60">VO2 Max Estimado</span>
                      <span className="text-lg font-bold text-[#00FF9D]">52 ml/kg/min</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-sm text-white/60">Eficiência de Corrida</span>
                      <span className="text-lg font-bold text-[#00FF9D]">87%</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-sm text-white/60">Tempo de Contato</span>
                      <span className="text-lg font-bold">210 ms</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-sm text-white/60">Oscilação Vertical</span>
                      <span className="text-lg font-bold">8.2 cm</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-sm text-white/60">Balanço L/R</span>
                      <span className="text-lg font-bold">51/49%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Plans */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Treinos Recomendados</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'Base Aeróbica', type: 'Longa Distância', duration: '90 min', difficulty: 'Moderado', color: 'from-blue-500/20 to-blue-600/10' },
                    { title: 'Intervalado', type: '5x1000m', duration: '60 min', difficulty: 'Intenso', color: 'from-red-500/20 to-red-600/10' },
                    { title: 'Tempo Run', type: 'Ritmo Controlado', duration: '45 min', difficulty: 'Moderado', color: 'from-yellow-500/20 to-yellow-600/10' },
                    { title: 'Recuperação', type: 'Corrida Leve', duration: '30 min', difficulty: 'Fácil', color: 'from-green-500/20 to-green-600/10' },
                    { title: 'Fartlek', type: 'Variação de Ritmo', duration: '50 min', difficulty: 'Moderado', color: 'from-purple-500/20 to-purple-600/10' },
                    { title: 'Hill Training', type: 'Subidas', duration: '40 min', difficulty: 'Intenso', color: 'from-orange-500/20 to-orange-600/10' },
                  ].map((plan, idx) => (
                    <div key={idx} className={`bg-gradient-to-br ${plan.color} rounded-2xl p-4 border border-white/10 hover:border-[#00FF9D]/30 transition-all duration-300 cursor-pointer group`}>
                      <div className="flex items-center justify-between mb-3">
                        <Target className="w-6 h-6 text-[#00FF9D]" />
                        <span className="text-xs px-2 py-1 bg-white/10 rounded-full">{plan.difficulty}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{plan.title}</h3>
                      <p className="text-xs text-white/60 mb-3">{plan.type}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">{plan.duration}</span>
                        <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#00FF9D] transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-br from-[#00FF9D]/10 to-[#00CC7D]/5 rounded-2xl sm:rounded-3xl p-6 border border-[#00FF9D]/20">
                <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Insights Personalizados</h3>
                <div className="space-y-4">
                  {[
                    { icon: '📈', title: 'Progresso Acelerado', text: 'Seu pace melhorou 12% nas últimas 4 semanas. Continue assim!' },
                    { icon: '⚠️', title: 'Atenção à Recuperação', text: 'Detectamos 3 treinos intensos seguidos. Considere um dia de descanso.' },
                    { icon: '💪', title: 'Força Recomendada', text: 'Adicionar treino de força 2x/semana pode melhorar sua performance em 8%.' },
                    { icon: '🎯', title: 'Meta Alcançável', text: 'Com seu ritmo atual, você pode atingir 10km em 45min em 6 semanas.' },
                  ].map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                      <span className="text-2xl">{insight.icon}</span>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">{insight.title}</h4>
                        <p className="text-xs text-white/70">{insight.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Strength Training */}
          {activeTab === 'strength' && (
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Treinos de <span className="text-[#00FF9D]">Força</span>
              </h2>

              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-orange-500/20">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Dumbbell className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Força para Corredores</h3>
                    <p className="text-xs sm:text-sm text-white/60">Previna lesões e melhore performance</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { title: 'Core & Estabilidade', exercises: 8, duration: '25 min', focus: 'Abdômen e lombar', icon: Target },
                  { title: 'Pernas & Glúteos', exercises: 10, duration: '35 min', focus: 'Força explosiva', icon: Zap },
                  { title: 'Mobilidade', exercises: 6, duration: '20 min', focus: 'Flexibilidade', icon: Footprints },
                  { title: 'Pliometria', exercises: 7, duration: '30 min', focus: 'Potência', icon: Sparkles },
                  { title: 'Prevenção', exercises: 9, duration: '25 min', focus: 'Lesões comuns', icon: Shield },
                  { title: 'Upper Body', exercises: 8, duration: '30 min', focus: 'Postura', icon: User },
                ].map((workout, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-orange-400/30 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <workout.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
                      <span className="text-xs sm:text-sm text-white/60">{workout.exercises} exercícios</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{workout.title}</h3>
                    <p className="text-xs sm:text-sm text-white/60 mb-3 sm:mb-4">{workout.focus}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-orange-400">{workout.duration}</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gamification */}
          {activeTab === 'gamification' && (
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Conquistas & <span className="text-[#00FF9D]">Gamificação</span>
              </h2>

              {/* Level Progress */}
              <div className="bg-gradient-to-br from-[#00FF9D]/10 to-[#00CC7D]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#00FF9D]/20">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00FF9D] rounded-2xl flex items-center justify-center">
                      <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#0D0D0D]" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Nível 24</h3>
                      <p className="text-xs sm:text-sm text-white/60">Corredor Avançado</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl sm:text-2xl font-bold text-[#00FF9D]">8,420</p>
                    <p className="text-xs sm:text-sm text-white/60">XP Total</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-white/60">Progresso para Nível 25</span>
                    <span className="font-semibold">420 / 1000 XP</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00FF9D] to-[#00CC7D] rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { icon: '🏃', title: 'Primeira Corrida', unlocked: true, rarity: 'Comum' },
                  { icon: '⚡', title: 'Velocista', unlocked: true, rarity: 'Raro' },
                  { icon: '🔥', title: '7 Dias Seguidos', unlocked: true, rarity: 'Épico' },
                  { icon: '🎯', title: 'Meta Mensal', unlocked: true, rarity: 'Raro' },
                  { icon: '👑', title: 'Maratonista', unlocked: false, rarity: 'Lendário' },
                  { icon: '💪', title: 'Força Total', unlocked: false, rarity: 'Épico' },
                  { icon: '🌟', title: '100km Total', unlocked: true, rarity: 'Raro' },
                  { icon: '🚀', title: 'Pace 5:00', unlocked: false, rarity: 'Épico' },
                ].map((achievement, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-2xl p-4 sm:p-6 border transition-all duration-300 ${
                      achievement.unlocked 
                        ? 'bg-gradient-to-br from-[#00FF9D]/10 to-[#00CC7D]/5 border-[#00FF9D]/20 hover:border-[#00FF9D]/40' 
                        : 'bg-white/5 border-white/10 opacity-50'
                    }`}
                  >
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{achievement.icon}</div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-1">{achievement.title}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      achievement.rarity === 'Lendário' ? 'bg-purple-500/20 text-purple-400' :
                      achievement.rarity === 'Épico' ? 'bg-orange-500/20 text-orange-400' :
                      achievement.rarity === 'Raro' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-white/10 text-white/60'
                    }`}>
                      {achievement.rarity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Leaderboard */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Ranking Semanal</h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { rank: 1, name: 'Ana Silva', distance: '85.2 km', avatar: '🥇' },
                    { rank: 2, name: 'Carlos Mendes', distance: '78.5 km', avatar: '🥈' },
                    { rank: 3, name: 'Você', distance: '61.5 km', avatar: '🥉', highlight: true },
                    { rank: 4, name: 'Maria Santos', distance: '58.3 km', avatar: '👤' },
                    { rank: 5, name: 'Pedro Costa', distance: '52.1 km', avatar: '👤' },
                  ].map((user) => (
                    <div 
                      key={user.rank} 
                      className={`flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                        user.highlight 
                          ? 'bg-[#00FF9D]/10 border border-[#00FF9D]/20' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-xl sm:text-2xl">{user.avatar}</span>
                        <div>
                          <p className="text-sm sm:text-base font-semibold">{user.name}</p>
                          <p className="text-xs sm:text-sm text-white/60">#{user.rank}</p>
                        </div>
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-[#00FF9D]">{user.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Bottom Navigation - 5 ícones com Home central destacado */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-lg border-t border-white/5">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-end justify-around h-20 sm:h-24 relative">
            {/* Treino de Força */}
            <NavButton 
              icon={Dumbbell} 
              label="Força" 
              active={activeTab === 'strength'} 
              onClick={() => setActiveTab('strength')} 
            />
            
            {/* Treinador IA */}
            <NavButton 
              icon={Brain} 
              label="IA Coach" 
              active={activeTab === 'ai-coach'} 
              onClick={() => setActiveTab('ai-coach')} 
            />
            
            {/* Home (Dashboard) - Central e Destacado */}
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex flex-col items-center gap-1 transition-all duration-300 -mt-6 ${
                activeTab === 'dashboard' ? 'text-[#00FF9D]' : 'text-white/40 hover:text-white/60'
              }`}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                activeTab === 'dashboard' 
                  ? 'bg-gradient-to-br from-[#00FF9D] to-[#00CC7D] shadow-lg shadow-[#00FF9D]/30' 
                  : 'bg-white/10'
              }`}>
                <Home className={`w-7 h-7 sm:w-8 sm:h-8 ${activeTab === 'dashboard' ? 'text-[#0D0D0D]' : 'text-white/60'}`} />
              </div>
              <span className="text-[10px] sm:text-xs font-medium">Home</span>
            </button>
            
            {/* Monitoramento */}
            <NavButton 
              icon={Activity} 
              label="Monitor" 
              active={activeTab === 'monitoring'} 
              onClick={() => setActiveTab('monitoring')} 
            />
            
            {/* Gamificação */}
            <NavButton 
              icon={Trophy} 
              label="Conquistas" 
              active={activeTab === 'gamification'} 
              onClick={() => setActiveTab('gamification')} 
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, change }: { icon: any, label: string, value: string, change: string, positive?: boolean }) {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-[#00FF9D]/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00FF9D]" />
        <span className={`text-xs sm:text-sm font-semibold ${change.startsWith('-') ? 'text-[#00FF9D]' : 'text-white/60'}`}>
          {change}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-white/60 mb-0.5 sm:mb-1">{label}</p>
      <p className="text-lg sm:text-2xl font-bold">{value}</p>
    </div>
  )
}

function LiveStat({ icon: Icon, label, value, highlight }: { icon: any, label: string, value: string, highlight?: boolean }) {
  return (
    <div className="text-center">
      <Icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${highlight ? 'text-[#00FF9D]' : 'text-white/60'}`} />
      <p className="text-xs sm:text-sm text-white/60 mb-1">{label}</p>
      <p className={`text-xl sm:text-3xl font-bold ${highlight ? 'text-[#00FF9D]' : ''}`}>{value}</p>
    </div>
  )
}

function NavButton({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-all duration-300 pb-2 ${
        active ? 'text-[#00FF9D]' : 'text-white/40 hover:text-white/60'
      }`}
    >
      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      <span className="text-[10px] sm:text-xs font-medium">{label}</span>
    </button>
  )
}
