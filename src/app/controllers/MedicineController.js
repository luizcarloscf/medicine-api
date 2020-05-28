import Medicine from '../models/Medicine.js';

class MedicineController {
  async store(req, res) {
    console.log(req.body)
    const med = await Medicine.create( {substancia: req.body.substancia,
                                        cnpj: req.body.cnpj,
                                        laboratorio: req.body.laboratorio,
                                        codigoggrem: req.body.codigoggrem,
                                        registro: req.body.registro,
                                        ean1: req.body.ean1,
                                        ean2: req.body.ean2,
                                        ean3: req.body.ean3,
                                        produto: req.body.produto});
    return res.json(med);
  }
}

export default new MedicineController();