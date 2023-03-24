
import {writable} from 'svelte/store';

const ini = [
  {id: 'AEaqrQqAh4osOjMHvZJE', title: 'Magenta', description: 'New'},
{id: 'Dzgzp0gloY5y5AZqiOqg', title: 'Indigo', description: 'Más wey'},
{id: 'H40iIbZP15D8GQqmBk4t', description: 'Nuevo en azul', title: 'Blue'},
{id: 'JOXnvobBisi1hWBeicnY', title: 'Green', description: 'Esto es verde '},
{id: 'ZEPpY7gSk4LPfxprf8jz', title: 'Gold ', description: 'Mensaje en color oro '},
{id: 'nZE5bwWyAFArRFj1a9lF', title: 'Coral', description: 'De putitos'},
{id: 'qT2pE5ilclSxTDpiXcNi', description: 'Putitos', title: 'teal'},
{id: 'zDQJqKUEdsDjxKxCwmF8', description: 'Texto blanco', title: 'Black'},
]
export const todos = writable(ini);









