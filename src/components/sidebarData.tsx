import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Método do Sistema',
        path: '/',
    },
    {
        title: 'Upload do Arquivo',
        path: '/upload',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Relatórios',
        path: '/relatorios',
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'Políticas',
        path: '/politicas',
        icon: <FaIcons.FaRocketchat />
    },
]