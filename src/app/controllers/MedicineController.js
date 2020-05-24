import Medicine from '../models/Medicine.js';

class MedicineController {
  async store(req, res) {
    console.log(req.body)
    const { id, substancia, CNPJ, Laboratorio, CodigoGGREM, Registro, EAN1, EAN2, EAN3, Produto } = await Medicine.create(req.body);
    return res.json({ id, substancia, CNPJ, Laboratorio, CodigoGGREM, Registro, EAN1, EAN2, EAN3, Produto });
  }
}

export default new MedicineController();