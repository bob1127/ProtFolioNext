import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    budget: "",
    websiteType: "",
    specialRequest: "",
    name: "",
    email: "",
  });

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    } else {
      alert("請填寫完整資訊");
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.budget !== "";
      case 2:
        return formData.websiteType !== "";
      case 3:
        return formData.specialRequest !== "";
      case 4:
        return formData.name !== "" && formData.email !== "";
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    alert("表單已提交！");
  };

  return (
    <Card className="max-w-lg mx-auto p-6 mt-10">
      <CardContent>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">選擇您的預算</h2>
              <select
                name="budget"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.budget}
              >
                <option value="">請選擇</option>
                <option value="10k-30k">10k-30k</option>
                <option value="30k-50k">30k-50k</option>
                <option value="50k+">50k+</option>
              </select>
              <Button className="mt-4" onClick={handleNext}>
                下一步
              </Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">選擇網站類型</h2>
              <select
                name="websiteType"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.websiteType}
              >
                <option value="">請選擇</option>
                <option value="形象網站">形象網站</option>
                <option value="一頁式網站">一頁式網站</option>
                <option value="購物網站">購物網站</option>
                <option value="其他">其他</option>
              </select>
              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={handleBack}>
                  上一步
                </Button>
                <Button onClick={handleNext}>下一步</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">特殊需求</h2>
              <Textarea
                name="specialRequest"
                placeholder="請輸入您的需求..."
                onChange={handleChange}
                value={formData.specialRequest}
              />
              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={handleBack}>
                  上一步
                </Button>
                <Button onClick={handleNext}>下一步</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold mb-4">填寫個人資料</h2>
              <Input
                type="text"
                name="name"
                placeholder="姓名"
                onChange={handleChange}
                value={formData.name}
              />
              <Input
                type="email"
                name="email"
                placeholder="電子郵件"
                onChange={handleChange}
                value={formData.email}
                className="mt-2"
              />
              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={handleBack}>
                  上一步
                </Button>
                <Button onClick={handleSubmit}>提交</Button>
              </div>
            </div>
          )}
        </motion.div>
      </CardContent>
    </Card>
  );
}
