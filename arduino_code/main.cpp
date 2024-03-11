#include <Arduino.h>
#include <dht.h> // Lib externa pra facilitar o uso do sensor DHT11 (necessário o download da lib)

#define AOUT_PIN A0 // The Arduino Nano pin that connects to AOUT pin of moisture sensor
#define AOUT_PIN_A1 A1
#define DHTTYPE DHT11 // The Arduino Nano pin that connects to DH pin of moisture sens

#define DH11_PIN 7

dht DHT;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int moisture_value = analogRead(AOUT_PIN); // read the analog value from sensor
  int chk = DHT.read11(DH11_PIN);

  Serial.print("moisture:");
  Serial.print(moisture_value);
  Serial.print(",");

  Serial.print("temperature:");
  Serial.print(DHT.temperature);
  Serial.print(",");

  Serial.print("humidity:");
  Serial.print(DHT.humidity);

  Serial.println();
  delay(10000);
}