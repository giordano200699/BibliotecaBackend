import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrestamosController } from "./prestamos.controller";
import { PrestamosService } from "./prestamos.service";
import { PrestamoSchema } from './../../esquemas/prestamo.schema';
import { PedidoSchema } from './../../esquemas/pedido.schema';
import { UsuarioSchema } from './../../esquemas/usuario.schema';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Prestamo', schema: PrestamoSchema },
	{ name: 'Pedido', schema: PedidoSchema },
	{ name: 'Usuario', schema: UsuarioSchema }])],
	controllers: [PrestamosController],
	providers: [PrestamosService]
})
export class PrestamosModule {}
