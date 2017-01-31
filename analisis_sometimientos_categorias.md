---
layout: post
title:  "Cuadro Básico"
date:   2016-10-21 
categories: Notas
tags: medicamentos cuadro_basico precios
author: Edgar, Roberto

---
* content
{:toc}



Base de datos de Sometimientos
================

### Número de solicitudes por grupo terapéutico para modificación o inclusión en el cuadro básico

    ## 
    ##                                         Analgesia 
    ##                                                14 
    ##                                         Anestesia 
    ##                                                 3 
    ##                                       Cardiología 
    ##                                                20 
    ##                                      Dermatología 
    ##                                                 3 
    ##                      Endocrinología y Metabolismo 
    ##                                                43 
    ##           Enfermedades Infecciosas y Parasitarias 
    ##                                                25 
    ##                      Enfermedades Inmunoalérgicas 
    ##                                                 3 
    ##                                 Gastroenterología 
    ##                                                 4 
    ##                                Gineco-obstetricia 
    ##                                                 6 
    ##                                       Hematología 
    ##                                                55 
    ##                             Nefrología y Urología 
    ##                                                 3 
    ##                                        Neumología 
    ##                                                16 
    ##                                        Neurología 
    ##                                                17 
    ##                                    No clasificado 
    ##                                                27 
    ##                                       Nutriología 
    ##                                                25 
    ##                                      Oftalmología 
    ##                                                 7 
    ##                                         Oncología 
    ##                                                96 
    ##                              Otorrinolaringología 
    ##                                                 2 
    ##                            Planificación Familiar 
    ##                                                 4 
    ##                                       Psiquiatría 
    ##                                                 4 
    ##                      Reumatología y Traumatología 
    ##                                                21 
    ## Soluciones Electrolíticas y Sustitutos del Plasma 
    ##                                                 3 
    ##     Vacunas,Toxoides, Inmunoglobuinas,Antitoxinas 
    ##                                                23

***Observamos:***

-   *Los grupos terapéuticos con mayores solicitudes son: Oncología y Hematología.*
-   *Como se puede observar hay grupo terapéuticos con menos de 10 solicitudes por lo que se omitiran en el análisis.*

### Proporción de medicamentos aceptados al cuadro básico por grupo terapéutico

    ## tcategorias$Categoria
    ##                                     Analgesia 
    ##                                     0.9285714 
    ## Vacunas,Toxoides, Inmunoglobuinas,Antitoxinas 
    ##                                     0.8695652 
    ##                                   Hematología 
    ##                                     0.8181818 
    ##                  Endocrinología y Metabolismo 
    ##                                     0.7906977 
    ##       Enfermedades Infecciosas y Parasitarias 
    ##                                     0.7600000 
    ##                                   Nutriología 
    ##                                     0.7600000 
    ##                  Reumatología y Traumatología 
    ##                                     0.6666667 
    ##                                    Neumología 
    ##                                     0.6250000 
    ##                                   Cardiología 
    ##                                     0.6000000 
    ##                                     Oncología 
    ##                                     0.5729167 
    ##                                    Neurología 
    ##                                     0.5294118 
    ##                                No clasificado 
    ##                                     0.0000000

***De lo anterior se puede concluir que:***

-   *Los medicamentos clasificados en grupos terapéuticos Vacunas y Analgesia son los más aceptados.*
-   *Mientras que los medicamentos pertenecientes a Oncología y Neurología.*

### Promedio de precios de medicamentos aceptados por grupo terapéutico

    ## base$Categoria
    ##       Enfermedades Infecciosas y Parasitarias 
    ##                                    26895.3689 
    ##                                     Oncología 
    ##                                    26463.9155 
    ##                  Endocrinología y Metabolismo 
    ##                                    16067.8779 
    ##                                    Neurología 
    ##                                     8616.7600 
    ##                                   Hematología 
    ##                                     6962.0774 
    ##                                    Neumología 
    ##                                     6272.5160 
    ##                  Reumatología y Traumatología 
    ##                                     5675.0936 
    ##                                   Cardiología 
    ##                                     2660.0858 
    ##                                     Analgesia 
    ##                                     1481.0892 
    ## Vacunas,Toxoides, Inmunoglobuinas,Antitoxinas 
    ##                                     1218.3085 
    ##                                   Nutriología 
    ##                                      489.7629

**Conclusiones:**

-   *Los grupos terapéuticos con medicamentos aceptados más costosos son: Oncología y Enfermedades. Parasitaras*
-   *Los grupos terapéuticos con medicamentos menos costosos coinciden con lo más aceptados, en este caso: Analgesia y Vacunas.*

Desagregado por años
--------------------

### Diágrama de caja y brazos de precios

![](analisis_sometimientos_categorias_files/figure-markdown_github/unnamed-chunk-6-1.png)

**Observaciones**

-   *Parece aumentar el rango de precios en el que son aceptados medicamentos de los grupos terapéuticos Analgesia, Cardiología y Oncología(No necesariamente implica un aumento promedio del precio).*
-   *Parece disminuir el rango de precios en el que son aceptados medicamentos del grupo Neurología.*

### Diágrama de caja y brazos desagregado por tipo de actualización

![](analisis_sometimientos_categorias_files/figure-markdown_github/unnamed-chunk-7-1.png)

**Observaciones**

-   *Solo se desagrego Oncología por tipo de actualización pues es el único grupo que presenta información suficiente*
-   *El rango de precios de los medicamentos aceptados para modificación en el cuadro básico han ido aumentando*

Outliers
--------

### Endocrinologia

    ##     Fecha.de.emision    Precio Actualizacion
    ## 122       2013-11-05  52890.97     Inclusión
    ## 123       2013-11-05 132227.88     Inclusión
    ## 124       2013-11-05 264456.18     Inclusión
    ##                                   Presentacion
    ## 122  Nitisinona 2mg cada caja con 60 cápsulas:
    ## 123  Nitisinona 5mg cada caja con 60 cápsulas:
    ## 124 Nitisinona 10mg cada caja con 60 cápsulas:

![](analisis_sometimientos_categorias_files/figure-markdown_github/unnamed-chunk-8-1.png)

**Nota:** *Los outliers que se removieron en la segunda grafica corresponden a los mostrados previamente. La nitisinona es un medicamento para tratar una enfermedad rara llamada tirosinemina hereditaria tipo I. Por lo que no es un medicamento para tratar enfermedades comunes en el grupo terapéutico.*

**Obs:** *Podemos notar que removiendo los outliers cambia el rango de precios del año 2013, observandose que la mayoría de los precios de los medicamentos se concentran alrededor de aprox. $300, siendo el 2014 un año en donde se aceptaron precios más variados respecto al 2013*

### Cardiología

    ##     Fecha.de.emision    Precio             Nombre Actualizacion
    ## 177       2014-09-02  3521.486          Tirofiban  Modificación
    ## 341       2016-05-10 26000.000 Alprostadil 500 µg     Inclusión
    ##                                                   Presentacion
    ## 177                                    Tirofiban 12.5 mg bolsa
    ## 341 Caja de cartón con 5 ampolletas etiquetadas con 500mcg/1mL

![](analisis_sometimientos_categorias_files/figure-markdown_github/unnamed-chunk-9-1.png)

**Nota:** *Los outliers que se removieron en la segunda grafica corresponden a los mostrados previamente. Aunque el Aprostadil fue catalogado en el cuadro basico dentro del grupo terapéutico Cardiología, es usado para el tratamiento de disfunción erectil.*

**Obs**: *Se puede observar una mejor visualización de la escala de los datos. Claramente se nota que el año 2016 fue un año atipico en el sentido de que aumento tanto el rango de precios de los medicamentos aceptados asi como el precio promedio de manera significativa.*

### Vacunas

    ##     Fecha.de.emision   Precio                  Nombre Actualizacion
    ## 181       2014-09-02 5247.327 Vacuna contra Rotavirus  Modificación
    ## 263       2015-08-25 5269.837  Inmunoglobulina humana     Inclusión
    ##                                                           Presentacion
    ## 181 Envase con 50 jeringas prellenadas y/o tubo de plástico con 1.5 ml
    ## 263                                                          4g/ 20 ml

![](analisis_sometimientos_categorias_files/figure-markdown_github/unnamed-chunk-10-1.png)

**Nota:** *Los outliers que se removieron en la segunda grafica corresponden a los mostrados previamente*

### Hematología

    ##     Fecha.de.emision   Precio             Nombre Actualizacion
    ## 272       2015-08-25 24115.40       Eptacog alfa  Modificación
    ## 273       2015-08-25 60288.49       Eptacog alfa  Modificación
    ## 367       2016-09-20 25200.00    Turoctocog alfa     Inclusión
    ## 391       2016-10-18 32000.00 Fibrinógeno Humano     Inclusión
    ##                                                                                       Presentacion
    ## 272 Envase con un frasco ámpula con liofilizado (2 mg) y un frasco ámpula con  2.1 ml de diluyente
    ## 273 Envase con un frasco ámpula con liofilizado (5 mg) y un frasco ámpula con  5.2 ml de diluyente
    ## 367                                                                      Frasco ámpula con 3000 UI
    ## 391          Frasco ámpula con 1.5 g de fibrinógeno humano y frasco ámpula con 100 ml de diluyente

![](analisis_sometimientos_categorias_files/figure-markdown_github/unnamed-chunk-11-1.png)

**Nota:** *Los outliers que se removieron en la segunda grafica corresponden a los mostrados previamente*

**Obs:** *Más alla de un cambio de escala, no cambia el patron en el grupo terapéutico **Vacunas** y **Hematología***
